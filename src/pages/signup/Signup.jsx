import React, { useState } from "react";
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

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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
      case "email":
        setEmail(value);
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

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
    }
    if (!userName) {
      newErrors.userName = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = "You must accept the Terms & Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted");
    }
  };
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
            label="Email"
            value={email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
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
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: "white";
  background-image: url("https://cdn.dribbble.com/users/371199/screenshots/12030142/connect-1_4x.jpg");
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 30%;
  padding: 50px;
  background-color: #ffffff;
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
