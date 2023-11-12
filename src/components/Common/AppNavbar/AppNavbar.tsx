import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { RootState } from "@store/store";

export const AppNavbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            PlaceholderReactApp
          </Link>
        </Typography>
        <Box>
          {!user && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
          {user && (
            <div>
              <Button color="inherit" component={Link} to={`/users/${user.id}`}>
                Profile
              </Button>
              <Button color="inherit" component={Link} to={`/todos/${user.id}`}>
                Todos
              </Button>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
