import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { UserCreateModel } from "../../../models/userModels";

interface RegisterFormProps {
  onSubmit: (user: UserCreateModel) => void;
}

const initialUser: UserCreateModel = {
  username: "",
  email: "",
  name: "",
  phone: "",
  website: "",
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<UserCreateModel>({ ...initialUser });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Register</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <TextField label="Username" name="username" fullWidth value={user.username} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" name="email" type="email" fullWidth value={user.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Name" name="name" fullWidth value={user.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone" name="phone" type="tel" fullWidth value={user.phone} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Website" name="website" fullWidth value={user.website} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
