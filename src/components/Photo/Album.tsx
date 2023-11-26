import React from "react";
import { Link as MuiLink, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AlbumModel } from "@models/albumModels";

interface AlbumItemProps {
  album: AlbumModel;
}

export const Album: React.FC<AlbumItemProps> = ({ album }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
      <Typography variant="h6">{album.title}</Typography>
      <MuiLink component={Link} to={`/album/${album.id}`} sx={{ mt: 1, display: "block" }}>
        View Album
      </MuiLink>
    </Paper>
  );
};
