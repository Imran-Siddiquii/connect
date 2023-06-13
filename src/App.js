import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import { Home } from "./pages/Home";
import { PrivateRoute } from "./components/PriveteRoute";
import { Signup } from "./pages/Auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
