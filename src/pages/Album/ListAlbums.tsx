import React, { useEffect, useState } from "react";
import { AlbumModel } from "@models/albumModels";
import { AlbumsService } from "@services/albumsService";
import { Album } from "@components/Photo/Album";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";

export const AlbumListPage: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const albumsService = new AlbumsService();
        const fetchedAlbums = await albumsService.getAlbums(page);
        setAlbums(fetchedAlbums);
        setNotFound(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          dispatch(showNotification({ message: "An error occurred while fetching albums.", severity: "error" }));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [page, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (notFound) {
    return <Typography>Albums not found.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Albums
      </Typography>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item key={album.id} xs={12}>
            <Album album={album} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
};
