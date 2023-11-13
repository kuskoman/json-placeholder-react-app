import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { PostCreateModel } from "@models/postModels";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "@store/notificationSlice";

interface PostCreateFormProps {
  onCreate: (post: PostCreateModel) => void;
}

const initialPost = {
  title: "",
  body: "",
};

export const PostCreateForm: React.FC<PostCreateFormProps> = ({ onCreate }) => {
  const [post, setPost] = useState(initialPost);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      dispatch(showNotification({ message: "You must be logged in to create post.", severity: "error" }));
      return;
    }
    onCreate({ ...post, userId: user.id });
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Create New Post</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <TextField label="Title" name="title" fullWidth value={post.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Body"
              name="body"
              multiline
              rows={4}
              fullWidth
              value={post.body}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
