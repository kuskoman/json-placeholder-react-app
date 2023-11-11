import React from "react";
import { UsersService } from "../../services/usersService";
import { UserCreateModel } from "../../models/userModels";
import { RegisterForm } from "../../components/Auth/RegisterForm/RegisterForm";

export const RegisterPage: React.FC = () => {
  const usersService = new UsersService();

  const handleRegister = async (user: UserCreateModel) => {
    try {
      const newUser = await usersService.createUser(user);
      console.log("Registered user:", newUser);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Register</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};
