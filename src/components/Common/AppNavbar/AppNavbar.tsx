import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { RootState } from "@store/store";
import { clearUser } from "@store/userSlice";

export const AppNavbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname;

  const logout = () => dispatch(clearUser);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            PlaceholderReactApp
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/posts">
            Posts
          </Button>
          <Button color="inherit" component={Link} to="/albums">
            Albums
          </Button>
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
            <>
              <Button color="inherit" component={Link} to={`/user/${user.id}`}>
                Profile
              </Button>
              <Button color="inherit" component={Link} to={`/todo/${user.id}`}>
                Todos
              </Button>
              <Button color="inherit" component={Link} onClick={logout} to={currentPath}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
