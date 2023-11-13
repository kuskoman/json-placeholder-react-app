import React, { useState } from "react";
import { PostsService } from "@services/postsService";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { Box, CircularProgress } from "@mui/material";
import { PostCreateModel } from "@models/postModels";
import { PostCreateForm } from "@components/Post/PostCreateForm";

export const PostCreatePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const postsService = new PostsService();

  const handleCreatePost = async (newPost: PostCreateModel) => {
    setLoading(true);
    try {
      await postsService.createPost(newPost);
      dispatch(showNotification({ message: "Post created successfully.", severity: "success" }));
    } catch (error) {
      console.error("Error creating post:", error);
      dispatch(showNotification({ message: "Failed to create post. Please try again.", severity: "error" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Create New Post</h2>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <PostCreateForm onCreate={handleCreatePost} />
      )}
    </div>
  );
};
