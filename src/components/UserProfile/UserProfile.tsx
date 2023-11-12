import React from "react";
import { UserModel } from "@models/userModels";
import { Paper, Typography } from "@mui/material";

interface UserProfileProps {
  user: UserModel;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="subtitle1">Username: {user.username}</Typography>
      <Typography variant="subtitle1">Email: {user.email}</Typography>
      <Typography variant="subtitle1">Phone: {user.phone}</Typography>
      <Typography variant="subtitle1">Website: {user.website}</Typography>
    </Paper>
  );
};
