import React from "react";
import { UserModel } from "@models/userModels";
import { Button, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface UserItemProps {
  user: UserModel;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <ListItem>
      <ListItemText primary={user.name} secondary={user.email} />
      <Button variant="outlined" onClick={handleViewProfile}>
        View Profile
      </Button>
    </ListItem>
  );
};
