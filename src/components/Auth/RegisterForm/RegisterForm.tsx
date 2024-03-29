import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { UserCreateModel } from "@models/userModels";
import { FieldValidationErrors, registerFormValidator } from "./registerFormValidator";

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
  const [fieldValidationErrors, setFieldValidationErrors] = useState<FieldValidationErrors>({});

  const validate = () => {
    const validationErrors = registerFormValidator(user);
    setFieldValidationErrors(validationErrors);
    return Object.values(validationErrors).every((x) => x === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    validate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(user);
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Register</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              data-testid="username"
              value={user.username}
              onChange={handleChange}
              error={!!fieldValidationErrors.username}
              helperText={fieldValidationErrors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              data-testid="email"
              fullWidth
              value={user.email}
              onChange={handleChange}
              error={!!fieldValidationErrors.email}
              helperText={fieldValidationErrors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              data-testid="name"
              fullWidth
              value={user.name}
              onChange={handleChange}
              error={!!fieldValidationErrors.name}
              helperText={fieldValidationErrors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              data-testid="phone"
              fullWidth
              value={user.phone}
              onChange={handleChange}
              error={!!fieldValidationErrors.phone}
              helperText={fieldValidationErrors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Website"
              name="website"
              data-testid="website"
              fullWidth
              value={user.website}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" data-testid="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
