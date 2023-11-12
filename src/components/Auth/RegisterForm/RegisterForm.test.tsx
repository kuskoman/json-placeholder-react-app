import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterForm } from "./RegisterForm"; // Adjust the import path as needed

describe("RegisterForm", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);
    mockOnSubmit.mockClear();
  });

  it("renders the form fields and submit button", () => {
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/website/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("validates fields and shows error messages", async () => {
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(screen.getByText("Username is required.")).toBeInTheDocument();
      expect(screen.getByText("Email is not valid.")).toBeInTheDocument();
      expect(screen.getByText("Name is required.")).toBeInTheDocument();
      expect(screen.getByText("Phone number must be 9 digits.")).toBeInTheDocument();
    });
  });

  it("calls onSubmit with user data when form is correctly filled", async () => {
    userEvent.type(screen.getByLabelText(/username/i), "testuser");
    userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    userEvent.type(screen.getByLabelText(/name/i), "Test User");
    userEvent.type(screen.getByLabelText(/phone/i), "123456789");
    userEvent.type(screen.getByLabelText(/website/i), "www.example.com");

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        username: "testuser",
        email: "test@example.com",
        name: "Test User",
        phone: "123456789",
        website: "www.example.com",
      });
    });
  });
});
