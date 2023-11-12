import React, { useEffect, useState } from "react";
import { AlbumsService } from "@services/albumsService";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { AlbumModel } from "@models/albumModels";
import { Album } from "@components/Photo/Album";
import { showNotification } from "@store/notificationSlice";
import { useDispatch } from "react-redux";

interface AlbumsListProps {
  userId: number;
}

export const AlbumsList: React.FC<AlbumsListProps> = ({ userId }) => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumsService = new AlbumsService();
      try {
        const userAlbums = await albumsService.getAlbumsByUserId(userId);
        setAlbums(userAlbums);
      } catch (error) {
        dispatch(showNotification({ message: "An error occurred while fetching albums.", severity: "error" }));
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [dispatch, userId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!albums.length) {
    return <Typography>No albums found for this user.</Typography>;
  }

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </Paper>
    </Box>
  );
};
