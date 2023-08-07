import React, { useEffect, useRef, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { height, padding } from "@mui/system";

import Email from "../../../component/EmailInput";
import PasswordInput from "../../../component/passwordInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tryAUth } from "../../../store/actions";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import VisibilityOff from "../../../assets/Icon_eye-off.png";
import Visibility from "../../../assets/Icon_eye.png";
import LoginIcon from "../../../assets/login.gif";
import lottie from "lottie-web";
import LoadingButtonsTransition from "../../../component/LoadingBotton";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      oneSeanLoad: lottie.destroy(),
      renderer: "svg",
      logo: true,
      autoplay: true,
      animationData: require("../../../assets/login.json"),
    });
  }, []);
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userIsLoading, userError, user } = useSelector(
    (state) => state.userReducer
  );
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onChange = (input, value) => {
    setLoginData({ ...loginData, [input]: value });
  };
  // edit profile
  // useEffect(() => {
  //   setLoginData(user)

  // }, [user])

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const loginHandler = () => {
    dispatch(tryAUth(loginData));
  };
  return (
    <ThemeProvider>
      <div
        style={{
          backgroundColor: "#F9F8FB",
          height: "100vh",
          paddingBlock: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ width: 600, height: 800, marginLeft: 320, marginRight: 50 }}
          ref={container}
        ></div>
        <div>
          <Container
            component="main"
            maxWidth="xs"
            style={{
              boxShadow: "2px 2px 1px 2px #cdcaed8d",
              borderRadius: 25,
              border: "1px solid #cdcaed8d",
              borderColor: "#cdcaed8d",
              backgroundColor: "white",
              marginRight: 500,
              justifyContent: "flex-end",
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color={"#2B29D4"}
                fontFamily={"Magilio"}
              >
                Welcome Back
              </Typography>{" "}
              <Typography
                variant="body"
                style={{ marginBlock: 20 }}
                color={"#56619E"}
              >
                Enter your data to sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={loginData?.email}
                  onChange={(event) => onChange("email", event.target.value)}
                />
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={loginData?.password}
                    onChange={(event) =>
                      onChange("password", event.target.value)
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <img
                              src={VisibilityOff}
                              alt="logo"
                              style={{
                                width: 20,
                                height: 20,
                                objectFit: " contain",
                              }}
                            />
                          ) : (
                            <img
                              src={Visibility}
                              alt="logo"
                              style={{
                                width: 20,
                                height: 20,
                                objectFit: " contain",
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="password"
                  />
                </FormControl>

                {userIsLoading ? (
                  <LoadingButtonsTransition />
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => loginHandler()}
                  >
                    Sign In
                  </Button>
                )}

                <Grid container>
                  <Grid item xs>
                    <Typography
                      variant="body"
                      hover
                      color={"#2B29D4"}
                      onClick={() => navigate("/ForgotPassword")}
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      {" "}
                      Forgot password?
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
