import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Email from "../EmailInput";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordInput from "../passwordInput";
import { useDispatch, useSelector } from "react-redux";
import { tryAUth } from "../../store/actions";
import { useNavigate } from "react-router-dom";

export default function SimplePaper() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const loginHandler = () => {
    if (loginData?.email === "" || loginData?.password === "") {
      console.log("sdsdf");
    } else {
      dispatch(tryAUth(loginData));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper
        elevation={3}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10%",
          boxShadow: "10px 20px 30px  #cdcaed8d",
        }}
      >
        <div style={{ marginBlock: 40, marginRight: 40, marginLeft: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <div>
              <div
                style={{
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  style={{
                    textAlign: "left",
                  }}
                >
                  Welcome Back !
                </Typography>
              </div>
              <div
                style={{
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h8"
                  gutterBottom
                  component="div"
                  style={{
                    textAlign: "left",

                    color: "#2B29D48d",
                  }}
                >
                  Enter your information here please
                </Typography>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              style={{ margin: 30, width: "100%" }}
              onSubmit={handleSubmit}
            >
              {
                <div
                  style={{
                    marginLeft: 30,
                    width: 237.5,
                    marginBlock: 10,
                  }}
                >
                  <Email
                    value={loginData?.email}
                    onChange={(event) => onChange("email", event.target.value)}
                  />
                </div>
              }
              <PasswordInput
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={loginData?.password}
                onChange={(event) => onChange("password", event.target.value)}
              />
              <Typography
                variant="h8"
                gutterBottom
                component="div"
                style={{
                  display: "flex",

                  textAlign: "left",
                  marginTop: 12,

                  color: "#2B29D48d",
                }}
              >
                By login you agree about our{" "}
                <Typography
                  variant="h8"
                  gutterBottom
                  component="div"
                  style={{
                    display: "flex",

                    marginLeft: 2,
                    textDecoration: "underline",

                    color: "#2B29D48d",
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Typography>
              <div style={{ display: "flex" }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  login
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="text"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Forgot password ?
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
