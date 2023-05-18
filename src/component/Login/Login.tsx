import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { style } from "./LoginStyle";
import React, { useEffect, useState } from "react";
import { login, signUp } from "../../actions/userActions";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useFormik } from "formik";
import { formValidation } from "../../validation";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hook/useAppSelector";
import { getAuthStatus } from "../../selector/userSelector";
const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const authSuccess = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formValidation,
      onSubmit: (values, { resetForm }) => {
        if (isSignUp) {
          dispatch(signUp(values));
          setIsSignUp(false);
          navigate("/login");
          resetForm({
            values: {
              email: "",
              password: "",
            },
          });
        } else {
          dispatch(login(values));
        }
      },
    });

  useEffect(() => {
    if (authSuccess) {
      navigate("/");
    }
  }, [authSuccess, navigate]);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={style.box}>
          <Avatar sx={style.avatar}>
            {isSignUp ? <AccountCircleOutlinedIcon /> : <LockOutlinedIcon />}
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign Up" : "Sign in"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Typography sx={style.typography}>{errors.email}</Typography>
            ) : null}
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <Typography sx={style.typography}>{errors.password}</Typography>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={style.loginButton}
            >
              {isSignUp ? "Sign Up" : "Sign in"}
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={style.signUpButton}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "already have an account? Sign in"
                : "Do not have an account? Sign Up"}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
