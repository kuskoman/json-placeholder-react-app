import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { hideNotification } from "@store/notificationSlice";
import { RootState } from "@store/store";

export const NotificationBar: React.FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.notification);

  const handleClose = (_event?: unknown, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideNotification());
  };

  return (
    <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={notification.severity} sx={{ width: "100%" }}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};
