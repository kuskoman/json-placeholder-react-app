import React from "react";
import { Typography } from "@mui/material";
import { AlbumModel } from "@models/albumModels";

interface AlbumProps {
  album: AlbumModel;
}

export const Album: React.FC<AlbumProps> = ({ album }) => {
  return <Typography variant="h6">{album.title}</Typography>;
};
