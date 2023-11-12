import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { UserCreateModel } from "@models/userModels";

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

interface FieldValidationErrors {
  username?: string;
  email?: string;
  name?: string;
  phone?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<UserCreateModel>({ ...initialUser });
  const [fieldValidationErrors, setFieldValidationErrors] = useState<FieldValidationErrors>({});

  const validate = () => {
    let validationErrors = { ...fieldValidationErrors };
    validationErrors.username = user.username ? "" : "Username is required.";
    validationErrors.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(user.email)
      ? ""
      : "Email is not valid.";
    validationErrors.name = user.name ? "" : "Name is required.";
    validationErrors.phone = /^[0-9]{9}$/.test(user.phone) ? "" : "Phone number must be 9 digits.";

    setFieldValidationErrors({ ...validationErrors });
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
              fullWidth
              value={user.phone}
              onChange={handleChange}
              error={!!fieldValidationErrors.phone}
              helperText={fieldValidationErrors.phone}
            />
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
