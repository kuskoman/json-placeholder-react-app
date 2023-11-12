import { PhotoModel } from "@models/photoModels";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

interface PhotoProps {
  photo: PhotoModel;
}

export const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
      <Typography variant="subtitle1">{photo.title}</Typography>
      <Box
        component="img"
        src={photo.thumbnailUrl}
        alt={photo.title}
        sx={{ width: "100%", maxHeight: 200, objectFit: "cover" }}
      />
    </Paper>
  );
};
