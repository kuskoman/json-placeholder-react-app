import { clearUser, setUser, userReducer } from "./userSlice";

describe("userSlice", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      user: null,
    });
  });

  it("should handle setUser", () => {
    const user = { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com" };
    expect(userReducer(undefined, setUser(user))).toEqual({
      user,
    });
  });

  it("should handle clearUser", () => {
    const previousState = { user: { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com" } };
    expect(userReducer(previousState, clearUser())).toEqual({
      user: null,
    });
  });
});
