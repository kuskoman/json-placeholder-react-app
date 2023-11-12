import { FieldValidationErrors, registerFormValidator } from "./registerFormValidator";
import { ValidationMessages } from "./validationMessages";

describe("Form Validation Tests", () => {
  const validUser = {
    username: "ValidUser123",
    email: "validuser@example.com",
    name: "Valid User",
    phone: "1234567890",
  };

  describe("registerFormValidator", () => {
    it("should return no errors for a valid user", () => {
      const errors: FieldValidationErrors = registerFormValidator(validUser);
      expect(errors).toEqual({ username: "", email: "", name: "", phone: "" });
    });

    it("should return an error for a username less than 3 characters", () => {
      const errors = registerFormValidator({ ...validUser, username: "ab" });
      expect(errors.username).toBe(ValidationMessages.USERNAME_TOO_SHORT);
    });

    it("should return an error for a missing email", () => {
      const errors = registerFormValidator({ ...validUser, email: "" });
      expect(errors.email).toBe(ValidationMessages.EMAIL_REQUIRED);
    });

    it("should return an error for an email without @", () => {
      const errors = registerFormValidator({ ...validUser, email: "invalidemail.com" });
      expect(errors.email).toBe(ValidationMessages.EMAIL_INVALID);
    });

    it("should return an error for a missing name", () => {
      const errors = registerFormValidator({ ...validUser, name: "" });
      expect(errors.name).toBe(ValidationMessages.NAME_REQUIRED);
    });

    it("should return an error for a missing phone number", () => {
      const errors = registerFormValidator({ ...validUser, phone: "" });
      expect(errors.phone).toBe(ValidationMessages.PHONE_REQUIRED);
    });

    it("should return an error for a phone number with non-digit characters", () => {
      const errors = registerFormValidator({ ...validUser, phone: "12345a7890" });
      expect(errors.phone).toBe(ValidationMessages.PHONE_INVALID);
    });
  });
});
