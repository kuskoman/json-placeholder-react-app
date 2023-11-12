import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { UserModel } from "@models/userModels";
import { UsersService } from "@services/usersService";
import { UserProfile } from "@components/UserProfile/UserProfile";
import { Address } from "@components/UserProfile/Address";
import { Company } from "@components/UserProfile/Company";

export const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async (id: number) => {
      setLoading(true);
      try {
        const usersService = new UsersService();
        const fetchedUser = await usersService.getUser(id);
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

    if (userId) {
      fetchUser(parseInt(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (notFound) {
    return <Typography>User not found.</Typography>;
  }

  if (!user) {
    return <Typography>An error occurred.</Typography>;
  }

  return (
    <Box sx={{ margin: 4 }}>
      <UserProfile user={user} />
      <Address address={user.address} />
      <Company company={user.company} />
    </Box>
  );
};
