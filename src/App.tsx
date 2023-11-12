import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { RegisterPage } from "./pages/Register/Register";
import { Footer } from "./components/Common/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppNavbar } from "./components/Common/AppNavbar/AppNavbar";
import { NotificationBar } from "./components/Common/NotificationBar/NotificationBar";
import { UserProfilePage } from "./pages/UserDetails/UserDetails";
import { UserListPage } from "./pages/UserList/UserList";
import { AlbumPage } from "./pages/Albums/Album";

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
              <Route path="/albums/:albumId" element={<AlbumPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
