import React from "react";
import { Paper, Typography } from "@mui/material";
import { PostModel } from "@models/postModels";

interface PostProps {
  post: PostModel;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
      <Typography variant="h6">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Paper>
  );
};
