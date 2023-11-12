import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { CommentModel } from "@models/commentModels";

interface CommentProps {
  comment: CommentModel;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Paper elevation={2} sx={{ padding: 2, marginY: 1, backgroundColor: "#f0f0f0" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "medium", color: "#1976d2" }}>
        {comment.name}
      </Typography>
      <Typography variant="caption" sx={{ display: "block", marginBottom: 1, color: "#666" }}>
        {comment.email}
      </Typography>
      <Box sx={{ backgroundColor: "white", padding: 2, borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
        <Typography variant="body2">{comment.body}</Typography>
      </Box>
    </Paper>
  );
};
