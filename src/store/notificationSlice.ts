import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  message: string;
  severity: "success" | "info" | "warning" | "error";
  open: boolean;
}

type NotificationSeverity = "success" | "info" | "warning" | "error";

const initialState: NotificationState = {
  message: "",
  severity: "info",
  open: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<{ message: string; severity: NotificationSeverity }>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
    hideNotification: (state) => {
      state.open = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
