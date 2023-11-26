import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TodoModel } from "@models/todoModel";
import { TodosService } from "@services/todosService";
import { useDispatch } from "react-redux";
import { showNotification } from "@store/notificationSlice";
import { TodoItem } from "@components/TodoItem/TodoItem";
import { Box, CircularProgress, List, Paper, Typography } from "@mui/material";

export const UserTodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const todosService = new TodosService();
        if (!userId) {
          console.log("User id not provided.");
          throw new Error("User id not provided.");
        }
        const fetchedTodos = await todosService.getTodosByUserId(parseInt(userId));
        setTodos(fetchedTodos);
      } catch (error: any) {
        console.log("An error occurred while fetching todos.", error);
        dispatch(showNotification({ message: "An error occurred while fetching todos.", severity: "error" }));
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchTodos();
    }
  }, [userId, dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        User's Todos
      </Typography>
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
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};
