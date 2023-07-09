import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signInAuth } from "../Reducer";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import { openNotificationWithIcon } from "../../../components/Notify";
import { notification } from "antd";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const { isLoading, token, isError } = useSelector((state) => state.Auth);
  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
    if (isError) {
      openNotificationWithIcon(api, "error", "Alread users exists!");
    }
  }, [token, isError]);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleChange = (field, value) => {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [field]: "",
      };
    });

    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "username":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "checkbox":
        setTermsAccepted(!termsAccepted);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "First Name is required";
    }
    if (!lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (password !== confirmPassword) {
      newErrors.passwordError = "Password should be match";
      setPasswordError("Password should be match");
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      dispatch(
        signInAuth({ firstName, lastName, username, password, confirmPassword })
      );
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        {contextHolder}
        <FormContainer>
          <Title>Sign up with ConnectX</Title>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <StyledTextField
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
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
              type="password"
              value={password}
              onChange={(e) => handleChange("password", e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <StyledTextField
              fullWidth
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
            {passwordError && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.passwordError}
              </p>
            )}
            <StyledFormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  color="primary"
                  onChange={(e) => handleChange("checkbox", e.target.checked)}
                />
              }
              label="I accept all the Terms & Conditions"
            />
            {errors.termsAccepted && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>
                {errors.termsAccepted}
              </p>
            )}
            <StyledButton type="submit" variant="contained" color="primary">
              Sign Up
            </StyledButton>
          </form>
          <SignupLink to="/login">Already have an account?</SignupLink>
        </FormContainer>
      </Container>
    </>
  );
};
const SignupLink = styled(RouterLink)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #1976d2;
  underline: none;
  text-decoration: none;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f9ff;
`;

const FormContainer = styled.div`
  width: 30%;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-top: 15px !important;
`;

const StyledButton = styled(Button)`
  margin-top: 20px !important;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  margin-top: 10px;
  width: 100%;
`;
