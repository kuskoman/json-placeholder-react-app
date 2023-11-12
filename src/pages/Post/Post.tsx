import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostModel } from "@models/postModels";
import { CommentModel } from "@models/commentModels";
import { PostsService } from "@services/postsService";
import { CommentsService } from "@services/commentsService";
import { Comment } from "@components/Post/Comment";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { Post } from "@components/Post/Post";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";

export const PostPage: React.FC = () => {
  const [post, setPost] = useState<PostModel | null>(null);
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostAndComments = async (id: number) => {
      setLoading(true);
      try {
        const postsService = new PostsService();
        const commentsService = new CommentsService();
        const fetchedPost = await postsService.getPost(id);
        const fetchedComments = await commentsService.getCommentsByPostId(id);
        setPost(fetchedPost);
        setComments(fetchedComments);
        setNotFound(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          dispatch(showNotification({ message: "An error occurred while fetching data.", severity: "error" }));
        }
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPostAndComments(parseInt(postId));
    }
  }, [postId, dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (notFound) {
    return <Typography>Post not found.</Typography>;
  }

  if (!post) {
    return <Typography>An error occurred.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 3, marginY: 3, backgroundColor: "#f7f7f7", borderLeft: "6px solid #1976d2" }}>
        <Post post={post} />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Comments:
        </Typography>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Paper>
    </Box>
  );
};
