import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const { isLoading, token } = useSelector((state) => state.Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
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
      case "fullName":
        setFullName(value);
        break;
      case "userName":
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
      case "passwordError":
        setPasswordError(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!userName) {
      newErrors.userName = "Username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (password !== confirmPassword) {
      newErrors.passwordError = "Password should be match";
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      dispatch(signInAuth({ fullName, userName, password, confirmPassword }));
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <FormContainer>
        <Title>Sign up with ConnectX</Title>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Full Name"
            value={fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
          <StyledTextField
            fullWidth
            label="Username"
            value={userName}
            onChange={(e) => handleChange("userName", e.target.value)}
            error={!!errors.userName}
            helperText={errors.userName}
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
      </FormContainer>
    </Container>
  );
};

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
