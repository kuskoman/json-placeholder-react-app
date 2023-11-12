import React from "react";
import { UsersService } from "@services/usersService";
import { UserCreateModel } from "@models/userModels";
import { RegisterForm } from "@components/Auth/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { setUser } from "@store/userSlice";
import { useNavigate } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const usersService = new UsersService();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (user: UserCreateModel) => {
    try {
      const newUser = await usersService.createUser(user);
      console.log("Registered user:", newUser);

      dispatch(setUser(newUser));

      dispatch(showNotification({ message: "Registration successful.", severity: "success" }));
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      dispatch(showNotification({ message: "Registration failed. Please try again.", severity: "error" }));
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};
