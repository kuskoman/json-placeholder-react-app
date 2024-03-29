import React, { useEffect, useState } from "react";
import { CircularProgress, List, Typography } from "@mui/material";
import { UserItem } from "@components/UserItem/UserItem";
import { UserModel } from "@models/userModels";
import { UsersService } from "@services/usersService";

export const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usersService = new UsersService();
    usersService.getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Typography variant="h4">User List</Typography>
      <List>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
    </div>
  );
};
