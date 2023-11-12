import { UserCreateModel } from "@models/userModels";
import { ValidationMessages } from "./validationMessages";

export interface FieldValidationErrors {
  username?: string;
  email?: string;
  name?: string;
  phone?: string;
}

const validateUsername = (username: string) => {
  if (username.length < 3) {
    return ValidationMessages.USERNAME_TOO_SHORT;
  }

  return "";
};

const validateEmail = (email: string) => {
  if (!email) {
    return ValidationMessages.EMAIL_REQUIRED;
  }

  if (!email.includes("@")) {
    return ValidationMessages.EMAIL_INVALID;
  }

  return "";
};

const validateName = (name: string) => {
  if (!name) {
    return ValidationMessages.NAME_REQUIRED;
  }

  return "";
};

const validatePhone = (phone: string) => {
  if (!phone) {
    return ValidationMessages.PHONE_REQUIRED;
  }

  if (phone.split("").some((char) => isNaN(Number(char)))) {
    return ValidationMessages.PHONE_INVALID;
  }

  return "";
};

export const registerFormValidator = (values: Partial<UserCreateModel>) => {
  const errors: FieldValidationErrors = {};

  errors.username = validateUsername(values.username || "");
  errors.email = validateEmail(values.email || "");
  errors.name = validateName(values.name || "");
  errors.phone = validatePhone(values.phone || "");

  return errors;
};
