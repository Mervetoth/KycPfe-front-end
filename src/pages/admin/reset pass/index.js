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
import {
  GetNewPasswordReset,
  GetPasswordReset,
  tryAUth,
} from "../../../store/actions";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import VisibilityOff from "../../../assets/Icon_eye-off.png";
import Visibility from "../../../assets/Icon_eye.png";
import LoginIcon from "../../../assets/login.gif";
import lottie from "lottie-web";
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

export default function ResetPassword() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      oneSeanLoad: lottie.destroy(),
      renderer: "svg",
      logo: true,
      autoplay: false,
      animationData: require("../../../assets/pass.json"),
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
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userIsLoading, userError, user } = useSelector(
    (state) => state.userReducer
  );
  //const { listNewPassword } = useSelector( (state) => state.newPasswordResetReducer);

  const [resetPasswordData, setResetPasswordData] = useState({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjgyODMxYTRlN2ZkZDg0NGY3YmY4ZDEiLCJpYXQiOjE2NTQwNzkzMDQsImV4cCI6MTY1NDA3OTUwNH0.tJwB0vezQ-9W5Cm3WsO_i3f4rblXPuiQ9RovNVmN9Cc",
    password: "",
    confirmPassword: "",
  });

  const onChange = (input, value) => {
    setResetPasswordData({ ...resetPasswordData, [input]: value });
  };
  // edit profile
  // useEffect(() => {
  //   setresetPasswordData(user)

  // }, [user])

  /*  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]); */

  const resetHandler = () => {
    dispatch(GetNewPasswordReset(resetPasswordData));
    navigate("/");
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
          style={{ width: 300, height: 300, marginLeft: 320, marginRight: 200 }}
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
                variant="h4"
                color={"#2B29D4"}
                fontFamily={"Magilio"}
              >
                Reset your password{" "}
              </Typography>{" "}
              <Typography
                variant="body"
                style={{ marginBlock: 20 }}
                color={"#56619E"}
              >
                Enter your new password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <FormControl
                  fullWidth
                  variant="outlined"
                  style={{ marginBottom: 20 }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    New password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={resetPasswordData?.password}
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
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    value={resetPasswordData?.confirmPassword}
                    onChange={(event) =>
                      onChange("confirmPassword", event.target.value)
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
                  <p>loading</p>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => resetHandler()}
                  >
                    Save
                  </Button>
                )}

                <Grid container>
                  <Grid item xs>
                    <Typography
                      variant="body"
                      hover
                      color={"#2B29D4"}
                      onClick={() => navigate("/Login")}
                      style={{ textDecoration: "underline" }}
                    >
                      {" "}
                      Go Back to login
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
