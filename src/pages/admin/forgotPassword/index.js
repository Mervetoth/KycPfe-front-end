import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../../component/button";

import Input from "../../../component/input";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSendMail, tryAUth } from "../../../store/actions";
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
export default function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userIsLoading } = useSelector((state) => state.userReducer);
  const [mailData, setMailData] = useState({ email: "" });

  const onChange = (input, value) => {
    setMailData({ ...mailData, [input]: value });
  };

  const sendHandler = () => {
    dispatch(GetSendMail(mailData));
  };

  useEffect(() => {
    dispatch(
      GetSendMail({
        email: "",
      })
    );
  }, []);

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
                Forgot your Password ?
              </Typography>{" "}
              <Typography
                variant="body"
                style={{ marginBlock: 20 }}
                color={"#56619E"}
              >
                Enter your email to receive a validation link .
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Input
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={mailData?.email}
                  onChange={(event) => onChange("email", event.target.value)}
                />

                {userIsLoading ? (
                  <p>loading</p>
                ) : (
                  <PrimaryButton
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    type="submit"
                    onClick={(mailData) => sendHandler(mailData)}
                  >
                    Send email
                  </PrimaryButton>
                )}

                <Grid container>
                  <Grid item xs>
                    <Typography
                      variant="body"
                      color={"#56619E"}
                      onClick={() => navigate("/Login")}
                      hover
                      style={{
                        textDecoration: "underline",
                        display: "flex",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                      }}
                    >
                      Go back to Login.{" "}
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
