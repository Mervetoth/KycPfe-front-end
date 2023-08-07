import { DatePicker } from "@material-ui/pickers";
import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/button";
import Input from "../../../component/input";
import icon_add from "../../../assets/addadmin.png";
import PhoneInput from "react-phone-input-2";
import PasswordInput from "../../../component/passwordInput";
import { useSelector, useDispatch } from "react-redux";
import { AddListAdmin, setAddAdminSuccess } from "../../../store/actions";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import VisibilityOff from "../../../assets/Icon_eye-off.png";
import Visibility from "../../../assets/Icon_eye.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";

export default function AddAdmin() {
  const dispatch = useDispatch();
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
  const { user, addAdminSuccess } = useSelector((state) => state.userReducer);

  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telNumber: "",
    permissions: [""],
  });
  const onChange = (input, value) => {
    setAdminData({ ...adminData, [input]: value });
  };
  const addHandler = () => {
    dispatch(AddListAdmin(adminData, user?.result.AccessToken));
  };
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
  useEffect(() => {
    if (addAdminSuccess) {
      dispatch(setAddAdminSuccess(false));
      setShowAlert(true);
      setAdminData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        telNumber: "",
        permissions: [""],
      });
    }
  }, [addAdminSuccess]);

  const [showAlert, setShowAlert] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ width: "100%", padding: 20 }}>
      {/* //////////////////////////////////////////////////////////////titre1 */}
      <div
        style={{
          alignContent: "space-between",
          display: "flex",
          marginBottom: 15,
        }}
      >
        <div>
          <img
            src={icon_add}
            alt="logo"
            style={{
              width: 80,
              height: 80,
              objectFit: " contain",
              marginRight: 20,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",

                color: "#2B29D4",
              }}
            >
              Add Admin
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",

                color: " #525B94 ",
              }}
            >
              Enter personal information required for identification, fields
              marked * are compulsory
            </Typography>{" "}
          </div>{" "}
        </div>
        <div
          style={{
            alignItems: "center",
            marginLeft: "34.5%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <PrimaryButton
            type="submit"
            onClick={(adminData) => addHandler(adminData)}
            style={{ backgroundColor: "#2B29D4", color: "white" }}
          >
            Save
          </PrimaryButton>
        </div>
      </div>

      <Divider
        variant="fullWidth"
        style={{
          marginBlock: 15,
        }}
      />
      {/* //////////////////////////////////////////////////////////////form1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",

              color: "#2B29D4",
            }}
          >
            Personal information
          </Typography>

          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",

              color: " #525B94 ",
            }}
          >
            Enter admin's personal informations
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center ",
          }}
        ></div>
      </div>
      <div>
        <Grid container spacing={0} style={gridContainer}>
          <Input
            style={gridItem}
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

          <Input
            style={gridItem}
            label="Last Name"
            autoComplete="given-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            value={adminData?.lastName}
            onChange={(event) => onChange("lastName", event.target.value)}
          />
          <FormControl>
            <FormLabel style={{ textAlign: "left" }} id="gender">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              name="gender"
              required
              fullWidth
              value={adminData?.gender}
              onChange={(event) => onChange("gender", event.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />{" "}
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <Input
            style={gridItem}
            label="E-mail"
            autoComplete="given-name"
            name="email"
            required
            fullWidth
            id="email"
            value={adminData?.email}
            onChange={(event) => onChange("email", event.target.value)}
          />
          <Input
            style={gridItem}
            label="Phone number"
            value={adminData?.telNumber}
            onChange={(event) => onChange("telNumber", event.target.value)}
          />

          <Input
            style={gridItem}
            label="Permissions"
            autoComplete="given-name"
            name="permissions"
            required
            fullWidth
            id="permissions"
            value={adminData?.permissions}
            onChange={(event) => onChange("permissions", event.target.value)}
          />
          <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              id="outlined-adornment-password"
              value={adminData?.password}
              onChange={(event) => onChange("password", event.target.value)}
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
          <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm password
            </InputLabel>
            <OutlinedInput
              type={values.showPassword ? "text" : "password"}
              id="outlined-adornment-password"
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
              label="confirmPass"
            />
          </FormControl>
        </Grid>
      </div>
      <Collapse in={showAlert}>
        <Stack
          sx={{ width: "30%", position: "absolute", right: 20, bottom: 20 }}
          spacing={2}
        >
          <Alert
            variant="filled"
            severity="success"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            This admin is saved with success !
          </Alert>
        </Stack>
      </Collapse>
    </div>
  );
}
