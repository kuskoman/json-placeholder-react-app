import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { RegisterPage } from "./page/Register/Register";
import { Footer } from "./components/Common/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppNavbar } from "./components/Common/AppNavbar/AppNavbar";
import { NotificationBar } from "./components/Common/NotificationBar/NotificationBar";
import { UserProfilePage } from "./page/UserDetails/UserDetails";
import { UserListPage } from "./page/UserList/UserList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />

        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Container maxWidth="md" sx={{ mt: 4 }}>
            <NotificationBar />
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/users" element={<UserListPage />} />
              <Route path="/users/:userId" element={<UserProfilePage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
