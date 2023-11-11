import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button, Box } from "@mui/material";
import { RegisterPage } from "./page/Register/Register";
import { Footer } from "./components/Common/Footer/Footer";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
