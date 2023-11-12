import React, { useState } from "react";
import { LoginForm } from "@components/Auth/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { setUser } from "@store/userSlice";
import { UsersService } from "@services/usersService";
import { Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LoginInput {
  username: string;
  password: string;
}
export const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const usersService = new UsersService();
  const navigate = useNavigate();

  const handleLogin = async (_credentials: LoginInput) => {
    setLoading(true);
    try {
      // we are mocking the login here
      const userId = 1;
      const loggedInUser = await usersService.getUser(userId);
      dispatch(setUser(loggedInUser));
      dispatch(showNotification({ message: "Login successful.", severity: "success" }));
      setLoading(false);

      navigate(`/users/${userId}`);
    } catch (error) {
      console.error("Login error:", error);
      dispatch(showNotification({ message: "Login failed. Please try again.", severity: "error" }));
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Login</h2>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};
