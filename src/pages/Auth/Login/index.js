import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoginAuth } from "../Reducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px !important;
  ${"" /* margin-top: 10px !important; */}
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const SignupLink = styled(RouterLink)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #1976d2;
  underline: none;
  text-decoration: none;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading, token, isError, data } = useSelector(
    (state) => state.Auth
  );
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleChange = (field, value) => {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [field]: "",
      };
    });

    switch (field) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      dispatch(LoginAuth({ username, password }));
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => handleChange("username", e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
          />
          <StyledTextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handleChange("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign In
          </StyledButton>
          <SignupLink to="/signup">Create an account?</SignupLink>
        </form>
      </FormContainer>
    </Container>
  );
};
