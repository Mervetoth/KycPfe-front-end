import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/addflag.png";
////////////////////:

import Input from "../../../component/input";
import { useDispatch, useSelector } from "react-redux";
import {
  AddListCountry,
  setAddCountrySuccess,
} from "../../../store/actions/country";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
////////////////
export default function AddCountry() {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });
  const [countryData, setCountryData] = useState({ pays: "", paysRisque: "" });
  const onChange = (input, value) => {
    setCountryData({ ...countryData, [input]: value });
  };

  const addHandler = () => {
    dispatch(AddListCountry(countryData, user?.result.AccessToken));
  };

  const { user } = useSelector((state) => state.userReducer);
  const { addCountrySuccess } = useSelector((state) => state.countryReducer);
  React.useEffect(() => {
    console.log(AddCountry);
    dispatch(AddListCountry(user?.result.AccessToken));
  }, []);

  useEffect(() => {
    if (addCountrySuccess) {
      dispatch(setAddCountrySuccess(false));
      setShowAlert(true);
      setCountryData({
        pays: "",
        paysRisque: "",
      });
    }
  }, [addCountrySuccess]);

  const [showAlert, setShowAlert] = useState(false);

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
              Add Country
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
              Enter required information , fields marked * are compulsory
            </Typography>{" "}
          </div>{" "}
        </div>
        <div
          style={{
            alignItems: "center",
            marginLeft: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <PrimaryButton
            type="submit"
            onClick={(countryData) => addHandler(countryData)}
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
            Country information
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
            Enter Country informations
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
            label="Country Name"
            autoComplete="given-name"
            name="pays"
            required
            fullWidth
            id="pays"
            value={countryData?.pays}
            onChange={(event) => onChange("pays", event.target.value)}
          />{" "}
          <Input
            style={gridItem}
            width="50px"
            autoComplete="given-name"
            name="paysRisque"
            required
            fullWidth
            id="paysRisque"
            label="Country Risk"
            autoFocus
            value={countryData?.paysRisque}
            onChange={(event) => onChange("paysRisque", event.target.value)}
          />
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
            This country is saved with success !
          </Alert>
        </Stack>
      </Collapse>
    </div>
  );
}
