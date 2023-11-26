import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { RegisterPage } from "./pages/Register/Register";
import { Footer } from "./components/Common/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppNavbar } from "./components/Common/AppNavbar/AppNavbar";
import { NotificationBar } from "./components/Common/NotificationBar/NotificationBar";
import { UserProfilePage } from "./pages/UserDetails/UserDetails";
import { UserListPage } from "./pages/UserList/UserList";
import { AlbumPage } from "./pages/Album/Album";
import { PostPage } from "@pages/Post/Post";
import { LoginPage } from "@pages/Login/Login";
import { HomePage } from "@pages/Home/Home";
import { PostListPage } from "@pages/Post/PostList";
import { AlbumListPage } from "@pages/Album/ListAlbums";
import { PostCreatePage } from "@pages/Post/PostCreate";
import { UserTodoListPage } from "@pages/UserTodoList/UserTodoListPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />

        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Container maxWidth="md" sx={{ mt: 4 }} className="main-container">
            <NotificationBar />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/post/create" element={<PostCreatePage />} />
              <Route path="/posts" element={<PostListPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/users" element={<UserListPage />} />
              <Route path="/user/:userId" element={<UserProfilePage />} />
              <Route path="/albums" element={<AlbumListPage />} />
              <Route path="/album/:albumId" element={<AlbumPage />} />
              <Route path="/userPosts/:postId" element={<PostPage />} />
              <Route path="/userTodos/:userId" element={<UserTodoListPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
