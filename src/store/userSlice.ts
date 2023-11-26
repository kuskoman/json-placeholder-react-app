import { UserLoginData } from "@models/userModels";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: UserLoginData | null;
}

const getUserFromLocalStorage = (): UserState["user"] => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

const setUserToLocalStorage = (user: UserLoginData) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginData>) => {
      setUserToLocalStorage(action.payload);
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
