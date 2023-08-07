import {
  Divider,
  Grid,
  MenuItem,
  Select,
  Table,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/adduser.png";
import PhoneInput from "react-phone-input-2";
////////////////////:
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "../../../component/input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  AddListUser,
  GetNameCountry,
  GetNameProduct,
  setAddUserSuccess,
} from "../../../store/actions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import CharteRisqueClient from "../../../component/charteRisqueClient";

////////////////
export default function AddUser(props) {
  const { listAdded } = props;
  const dispatch = useDispatch();
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    columnGap: "20px",
    rowGap: "20px",
    padding: "15px",
  };
  const gridItem = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",

    padding: "15px",
    fontSize: "30px",
    textAlign: "center",
  };
  // on ajoute state ici
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    permissions: "USER",
    paysId: "",
    cin: "",
    telNumber: "",
    adresse: " ",
    birthDate: "",
    postalCode: "",
    city: "",
    gender: "",
    produitId: "",
  });
  const { user, addUserSuccess } = useSelector((state) => state.userReducer);
  const onChange = (input, value) => {
    setUserData({ ...userData, [input]: value });
  };

  const addHandler = () => {
    dispatch(
      AddListUser(
        {
          ...userData,
          risk:
            listAdded.length > 0
              ? (
                  listAdded.reduce(
                    (a, b) => parseInt(a) + parseInt(b.score),
                    0
                  ) / listAdded.length
                )
                  .toFixed(2)
                  .toString()
              : null,
        },
        user?.result.AccessToken
      )
    );
  };

  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });
  const [listingCountryData, setListingCountryData] = useState();
  const { listNameCountry } = useSelector(
    (state) => state.listingCountryReducer
  );

  const { listNameProduct } = useSelector(
    (state) => state.listingProductReducer
  );

  useEffect(() => {
    dispatch(GetNameProduct(user?.result.AccessToken));
  }, [user]);

  useEffect(() => {
    dispatch(GetNameCountry(user?.result.AccessToken));
  }, [user]);

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
  const handleClickShowPasswordconf = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPasswordconf = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (addUserSuccess) {
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        permissions: ["USER"],
        paysId: "",
        cin: "",
        telNumber: "",
        adresse: " ",
        birthDate: "",
        postalCode: "",
        city: "",
        gender: "",
        produitId: "",
      });
    }
  }, [addUserSuccess]);
  return (
    <div style={{ width: "100%", marginTop: 40 }}>
      {/* //////////////////////////////////////////////////////////////titre1 */}
      <Divider
        variant="fullWidth"
        style={{
          marginBlock: 15,
        }}
      />
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
              Add user
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
            marginLeft: "32.2%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton
            type="submit"
            onClick={(userData) => addHandler(userData)}
            style={{ backgroundColor: "primary.main" }}
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
      {/*    <div style={{ display: "flex" }}>
        <div
          style={{
            marginTop: 60,
            marginBottom: 40,
            marginRight: 300,
            alignContent: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",

              color: "#2B29D4",
            }}
          >
            Client risk
          </Typography>

          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              marginRight: 20,
              color: " #525B94 ",
            }}
          >
            Visualize the client risk attributes .
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-end",
          }}
        >
          <CharteRisqueClient item={item} />
        </div>
      </div> */}
      {/* //////////////////////////////////////////////////////////////form1 */}
      <div
        style={
          {
            /*    marginLeft: 50, */
          }
        }
      >
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
              Enter user's personal informations
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
              value={userData?.firstName}
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
              value={userData?.lastName}
              onChange={(event) => onChange("lastName", event.target.value)}
            />
            {/*            <Input
              style={gridItem}
              label="Gender"
              autoComplete="given-name"
              name="gender"
              required
              fullWidth
              id="gender"
              value={userData?.gender}
              onChange={(event) => onChange("gender", event.target.value)}
            /> */}
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
                value={userData?.gender}
                onChange={(event) => onChange("gender", event.target.value)}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />{" "}
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
              value={userData?.email}
              onChange={(event) => onChange("email", event.target.value)}
            />
            <Input
              style={gridItem}
              label="Phone number"
              autoComplete="given-name"
              name="telNumber"
              required
              fullWidth
              id="telNumber"
              value={userData?.telNumber}
              onChange={(event) => onChange("telNumber", event.target.value)}
            />
            <Grid item xs={12} sm={6} style={{ width: "300px" }}>
              <TextField
                style={{ width: "100%" }}
                id="birthDate"
                label="Birthday"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                value={userData?.birthDate}
                onChange={(event) => onChange("birthDate", event.target.value)}
              />
            </Grid>
            <Input
              label="CIN number"
              autoComplete="given-name"
              name="cin"
              required
              fullWidth
              id="cin"
              value={userData?.cin}
              onChange={(event) => onChange("cin", event.target.value)}
            />{" "}
            <FormControl fullWidth variant="outlined" style={{ width: "50%" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={userData?.password}
                onChange={(event) => onChange("password", event.target.value)}
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
                /*                 value={userData?.password}
                onChange={(event) => onChange("password", event.target.value)} */
                /*      endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordconf}
                      onMouseDown={handleMouseDownPasswordconf}
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
                } */
                label="confirmPassword"
              />
            </FormControl>
          </Grid>
        </div>
        <Divider variant="fullWidth" style={{ marginBlock: 15 }} />
        {/*  //////////////////////////////////////////////////////////////form2    adffress*/}
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
            Address:
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
            Enter user's address informations
          </Typography>

          <div>
            <Grid container spacing={0} style={gridContainer}>
              <Input
                style={gridItem}
                autoComplete="given-name"
                name="adresse"
                required
                fullWidth
                id="adresse"
                label="Address"
                value={userData?.adresse}
                onChange={(event) => onChange("adresse", event.target.value)}
              />

              <Input
                style={gridItem}
                label="Postal code"
                autoComplete="given-name"
                name="postalCode"
                required
                fullWidth
                id="postalCode"
                value={userData?.postalCode}
                onChange={(event) => onChange("postalCode", event.target.value)}
              />

              <Input
                style={gridItem}
                label="City"
                autoComplete="given-name"
                name="city"
                required
                fullWidth
                id="city"
                value={userData?.city}
                onChange={(event) => onChange("city", event.target.value)}
              />

              <FormControl>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  style={{
                    fontSize: "17px",
                    textAlign: "left",
                    width: 216,
                    height: 58,
                  }}
                  required
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userData.paysId}
                  label="Country"
                  onChange={(event) => onChange("paysId", event.target.value)}
                >
                  {listNameCountry.map((pays, index) => (
                    <MenuItem value={pays.id}>{pays.pays}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  style={{
                    fontSize: "17px",
                    textAlign: "left",
                    width: 216,
                    height: 58,
                  }}
                  required
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userData.produitId}
                  label="Product"
                  onChange={(event) =>
                    onChange("produitId", event.target.value)
                  }
                >
                  {listNameProduct.map((prod, index) => (
                    <MenuItem value={prod.id}>{prod.prodName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
