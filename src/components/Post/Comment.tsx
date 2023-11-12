import React from "react";
import { Paper, Typography } from "@mui/material";
import { CommentModel } from "@models/commentModels";

interface CommentProps {
  comment: CommentModel;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
      <Typography variant="subtitle1">
        {comment.name} ({comment.email})
      </Typography>
      <Typography variant="body2">{comment.body}</Typography>
    </Paper>
  );
};
