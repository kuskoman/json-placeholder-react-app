import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterForm } from "./RegisterForm";
import { ValidationMessages } from "./validationMessages";

describe("RegisterForm", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<RegisterForm onSubmit={mockOnSubmit} />);
    mockOnSubmit.mockClear();
  });

  it("renders the form fields and submit button", () => {
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("phone")).toBeInTheDocument();
    expect(screen.getByTestId("website")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("validates fields and shows error messages", async () => {
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(screen.getByText(ValidationMessages.USERNAME_TOO_SHORT)).toBeInTheDocument();
      expect(screen.getByText(ValidationMessages.EMAIL_REQUIRED)).toBeInTheDocument();
      expect(screen.getByText(ValidationMessages.NAME_REQUIRED)).toBeInTheDocument();
      expect(screen.getByText(ValidationMessages.PHONE_REQUIRED)).toBeInTheDocument();
    });
  });

  it("calls onSubmit with user data when form is correctly filled", async () => {
    const usernameInput = screen.getByTestId("username");
    const emailInput = screen.getByTestId("email");
    const nameInput = screen.getByTestId("name");
    const phoneInput = screen.getByTestId("phone");
    const websiteInput = screen.getByTestId("website");

    const exampleUser = {
      username: "testuser",
      email: "test@example.com",
      name: "Test User",
      phone: "123456789",
      website: "www.example.com",
    };

    userEvent.type(usernameInput, exampleUser.username);
    userEvent.type(emailInput, exampleUser.email);
    userEvent.type(nameInput, exampleUser.name);
    userEvent.type(phoneInput, exampleUser.phone);
    userEvent.type(websiteInput, exampleUser.website);

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(exampleUser);
    });
  });
});
