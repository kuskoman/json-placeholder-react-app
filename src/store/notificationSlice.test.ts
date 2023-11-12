import { hideNotification, notificationReducer, showNotification } from "./notificationSlice";
import { configureStore } from "@reduxjs/toolkit";

describe("notificationSlice", () => {
  it("should return the initial state", () => {
    expect(notificationReducer(undefined, { type: "unknown" })).toEqual({
      message: "",
      severity: "info",
      open: false,
    });
  });

  it("should handle showNotification", () => {
    const actual = notificationReducer(undefined, showNotification({ message: "Test message", severity: "success" }));
    expect(actual.open).toEqual(true);
    expect(actual.message).toEqual("Test message");
    expect(actual.severity).toEqual("success");
  });

  it("should handle hideNotification", () => {
    const previousState = {
      message: "Test message",
      severity: "info",
      open: true,
    } as const;
    expect(notificationReducer(previousState, hideNotification())).toEqual({
      message: "Test message",
      severity: "info",
      open: false,
    });
  });
});

describe("store", () => {
  it("should handle dispatching show and hide notifications", () => {
    const store = configureStore({ reducer: { notification: notificationReducer } });

    store.dispatch(showNotification({ message: "Test message", severity: "error" }));
    let state = store.getState().notification;
    expect(state).toEqual({
      message: "Test message",
      severity: "error",
      open: true,
    });

    store.dispatch(hideNotification());
    state = store.getState().notification;
    expect(state).toEqual({
      message: "Test message",
      severity: "error",
      open: false,
    });
  });
});
