import React from "react";
import { Box, Typography } from "@mui/material";
import { PostModel } from "@models/postModels";

interface PostProps {
  post: PostModel;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {post.title}
      </Typography>
      <Box sx={{ backgroundColor: "white", padding: 2, borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <Typography variant="body1">{post.body}</Typography>
      </Box>
    </div>
  );
};
