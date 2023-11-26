import React from "react";
import { TodoModel } from "@models/todoModel";
import { Checkbox, ListItem, ListItemText } from "@mui/material";

interface TodoItemProps {
  todo: TodoModel;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <ListItem>
      <ListItemText primary={todo.title} />
      <Checkbox checked={todo.completed} disabled />
    </ListItem>
  );
};
