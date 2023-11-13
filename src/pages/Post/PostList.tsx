import React, { useEffect, useState } from "react";
import { PostModel } from "@models/postModels";
import { PostsService } from "@services/postsService";
import { Post } from "@components/Post/Post";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";

export const PostListPage: React.FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsService = new PostsService();
        const fetchedPosts = await postsService.getPosts(page);
        setPosts(fetchedPosts);
        setNotFound(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          dispatch(showNotification({ message: "An error occurred while fetching posts.", severity: "error" }));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (notFound) {
    return <Typography>Posts not found.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: 2 }}>
        <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
};
