import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./components/PriveteRoute";
import { Signup } from "./pages/Auth/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Profile } from "./container/Profile";
import { LikedPost } from "./container/LikedPost";
import { Bookmark } from "./container/Bookmark";
import Header from "./components/Header";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/liked-post" element={<LikedPost />} />
            <Route exact path="/bookmark" element={<Bookmark />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
