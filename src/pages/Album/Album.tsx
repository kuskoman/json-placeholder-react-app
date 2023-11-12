import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoModel } from "@models/photoModels";
import { AlbumsService } from "@services/albumsService";
import { PhotosService } from "@services/photosService";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { AlbumModel } from "@models/albumModels";
import { Photo } from "@components/Photo/Photo";
import { UserAuthorBox } from "@components/UserAuthorBox/UserAuthorBox";

export const AlbumPage: React.FC = () => {
  const [album, setAlbum] = useState<AlbumModel | null>(null);
  const [photos, setPhotos] = useState<PhotoModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { albumId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAlbum = async (id: number) => {
      setLoading(true);
      try {
        const albumsService = new AlbumsService();
        const photosService = new PhotosService();
        const [fetchedAlbum, fetchedPhotos] = await Promise.all([
          albumsService.getAlbum(id),
          photosService.getPhotosByAlbumId(id),
        ]);
        setAlbum(fetchedAlbum);
        setPhotos(fetchedPhotos);
        setNotFound(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          dispatch(showNotification({ message: "An error occurred while fetching album data.", severity: "error" }));
        }
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      fetchAlbum(parseInt(albumId));
    }
  }, [dispatch, albumId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (notFound) {
    return <Typography>Album not found.</Typography>;
  }

  if (!album) {
    return <Typography>An error occurred.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">{album.title}</Typography>
      <UserAuthorBox userId={album.userId} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Photo photo={photo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
