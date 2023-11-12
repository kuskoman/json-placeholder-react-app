import React from "react";
import { TodoModel } from "@models/todoModel";
import { Checkbox, ListItem, ListItemText, Paper } from "@mui/material";

interface TodoItemProps {
  todo: TodoModel;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <ListItem>
      <Paper
        elevation={2}
        sx={{
          padding: 2,
          marginY: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ListItemText primary={todo.title} />
        <Checkbox checked={todo.completed} disabled />
      </Paper>
    </ListItem>
  );
};
