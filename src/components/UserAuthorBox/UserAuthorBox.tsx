import React, { useEffect, useState } from "react";
import { UserModel } from "@models/userModels";
import { UsersService } from "@services/usersService";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { showNotification } from "@store/notificationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface UserAuthorBoxProps {
  userId: number;
}

export const UserAuthorBox: React.FC<UserAuthorBoxProps> = ({ userId }) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const usersService = new UsersService();
        const fetchedUser = await usersService.getUser(userId);
        setUser(fetchedUser);
        setNotFound(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          dispatch(showNotification({ message: "An error occurred while fetching user data.", severity: "error" }));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId, dispatch]);

  const handleViewProfile = () => {
    navigate(`/users/${userId}`);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (notFound) {
    return <Typography>User not found.</Typography>;
  }

  if (!user) {
    return <Typography>An error occurred.</Typography>;
  }

  return (
    <Paper
      elevation={3}
      sx={{ padding: 2, marginY: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <Box>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="subtitle1">@{user.username}</Typography>
      </Box>
      <Button variant="contained" onClick={handleViewProfile}>
        View Profile
      </Button>
    </Paper>
  );
};
