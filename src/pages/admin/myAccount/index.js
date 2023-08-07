import React, { useEffect, useState } from "react";
import { Divider, InputAdornment, TextField } from "@mui/material";
import PasswordInput from "../../../component/passwordInput";
import PrimaryButton from "../../../component/button";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Input from "../../../component/input";
import CancelButton from "../../../component/CancelButton";
import UploadButton from "../../../component/UploadButton";
import Emailicon from "@mui/icons-material/AlternateEmailOutlined";
import EmailInput from "../../../component/EmailInput";
import { BorderColor } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetByIdListAdmin } from "../../../store/actions/user";
import { passwordResetReducer } from "../../../store/reducers/passwordUpdate";
import { GetPasswordReset } from "../../../store/actions";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import VisibilityOff from "../../../assets/Icon_eye-off.png";
import Visibility from "../../../assets/Icon_eye.png";
////
export default function StickyHeadTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { user, getNewListAdmin } = useSelector((state) => state.userReducer);
  const [adminData, setAdminData] = useState();
  const onChange = (input, value) => {
    setAdminData({ ...adminData, [input]: value });
  };
  const getIdHandler = () => {
    dispatch(GetByIdListAdmin(adminData, user?.result.AccessToken));
  };
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPass: "",
    newPass2: "",
  });
  const onChangePassword = (passwordInput, value) => {
    setPasswordData({ ...passwordData, [passwordInput]: value });
  };
  const updatePassword = () => {
    dispatch(GetPasswordReset(passwordData, user?.result.AccessToken));
  };

  useEffect(() => {
    dispatch(
      GetByIdListAdmin(
        {
          id: user.result.id,
        },
        user?.result.AccessToken
      )
    );
  }, []);

  useEffect(() => {
    setAdminData(getNewListAdmin);
  }, [getNewListAdmin]);

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    columnGap: "30px",
    rowGap: "30px",
    padding: "20px",
  };
  const gridItem = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
  };
  const columns = [
    { id: "id", label: "Id" },
    { id: "firstName", label: "First name", minWidth: 100 },
    {
      id: "lastName",
      label: "Last name",

      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "action",
    },
  ];

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <div>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{
            textAlign: "left",

            color: "#2B29D4",
          }}
        >
          My Account
        </Typography>
      </div>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",
                color: "#404875",
              }}
            >
              Profile
            </Typography>

            <Typography
              variant="caption"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",
                color: " #56619E",
              }}
            >
              Manage your account prefernces here .
            </Typography>
          </div>{" "}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <CancelButton
              label="Cancel"
              style={{
                marginRight: 20,
                backgroundColor: "#B2B1EA",
                borderColor: "#B2B1EA",
              }}
            >
              Cancel
            </CancelButton>
            <PrimaryButton
              style={{ backgroundColor: "#2B29D4", color: "white" }}
              label="save"
            >
              save
            </PrimaryButton>

            {/* <Button variant="outlined"  >Cancel</Button>
              <Button variant="contained" size="small" style={{backgroundColor:'#2B29D4',color:'white',marginLeft:20 }}>Save</Button> */}
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: "#404875",
            }}
          >
            Full Name
          </Typography>

          <Typography
            variant="caption"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: " #56619E",
            }}
          >
            Update you full name here .
          </Typography>
        </div>{" "}
        <div style={{ display: "flex" }}>
          <div
            style={{
              alignItems: "center",

              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Input
              label="Last Name"
              autoComplete="given-name"
              name="lastName"
              required
              fullWidth
              id="lastName"
              value={adminData?.lastName}
              onChange={(event) => onChange("lastName", event.target.value)}
            />
          </div>
          <div
            style={{ marginLeft: 50, display: "flex", alignItems: "center " }}
          >
            <Input
              width="50px"
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={adminData?.firstName}
              onChange={(event) => onChange("firstName", event.target.value)}
            />
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: "#404875",
            }}
          >
            Email
          </Typography>

          <Typography
            variant="caption"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: " #56619E",
            }}
          >
            Where sould invoices be sent .
          </Typography>
        </div>{" "}
        <div style={{ display: "flex" }}>
          <div
            style={{
              alignItems: "center",

              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <EmailInput
              label="Email"
              name="email"
              required
              fullWidth
              id="email"
              autoFocus
              value={adminData?.email}
              onChange={(event) => onChange("email", event.target.value)}
            />
          </div>
          <div
            style={{ marginLeft: 50, display: "flex", alignItems: "center " }}
          ></div>
        </div>
      </div>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <div
        style={{
          display: "flex",

          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "25%",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: "#404875",
            }}
          >
            Your photo
          </Typography>

          <Typography
            variant="caption"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: " #56619E",
            }}
          >
            This is will be desplayed as <br />
            your profile photo .
          </Typography>
        </div>{" "}
        <div style={{ display: "flex" }}>
          <div
            style={{
              alignItems: "flex-start",

              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Avatar
              sx={{ width: 55, height: 55, fontSize: 30 }}
              src={""}
            ></Avatar>
            <UploadButton />
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: 20, marginBottom: 20 }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: 338 }}>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                marginBottom: 20,
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  color: "#404875",
                }}
              >
                Password{" "}
              </Typography>

              <Typography
                variant="caption"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                  color: " #56619E",
                }}
              >
                Update your password here .
              </Typography>
            </div>{" "}
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <PrimaryButton
              type="submit"
              onClick={(passwordData) => updatePassword(passwordData)}
              style={{ backgroundColor: "#2B29D4", color: "white" }}
              label="save"
            >
              save
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div style={gridContainer}>
        <div
          style={{
            gridItem,
          }}
        >
          <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              current password
            </InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              id="outlined-adornment-password"
              value={passwordData?.password}
              onChange={(event) =>
                onChangePassword("password", event.target.value)
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
              label="current password"
            />
          </FormControl>
        </div>
        <div
          style={{
            gridItem,
          }}
        >
          <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              id="outlined-adornment-password"
              value={passwordData?.newPass}
              onChange={(event) =>
                onChangePassword("newPass", event.target.value)
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
              label="current password"
            />
          </FormControl>
        </div>{" "}
        <div
          style={{
            gridItem,
          }}
        >
          <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm New Password
            </InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              id="outlined-adornment-password"
              value={passwordData?.newPass2}
              onChange={(event) =>
                onChangePassword("newPass2", event.target.value)
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
              label="current password"
            />
          </FormControl>
        </div>
      </div>{" "}
      <div></div>
    </div>
  );
}
