import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/Icon_user-plus.png";
import PhoneInput from "react-phone-input-2";
import { useSearchParams } from "react-router-dom";
////////////////////:

import Input from "../../../component/input";
import PasswordInput from "../../../component/passwordInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetByIdListCountry,
  setEditCountrySuccess,
} from "../../../store/actions/country";
import { UpdateListCountry } from "../../../store/actions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
////////////////
export default function EditCountry() {
  const navigate = useNavigate();
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
  const [searchParams] = useSearchParams();
  const [countryData, setCountryData] = useState();
  const { getNewListCountry, editCountrySuccess } = useSelector(
    (state) => state.countryReducer
  );
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(
      GetByIdListCountry(
        {
          id: searchParams.get("id"),
        },
        user?.result.AccessToken
      )
    );
  }, []);

  useEffect(() => {
    setCountryData(getNewListCountry);
  }, [getNewListCountry]);

  useEffect(() => {
    if (editCountrySuccess) {
      dispatch(setEditCountrySuccess(false));
      setShowAlert(true);
    }
  }, [editCountrySuccess]);

  const [showAlert, setShowAlert] = useState(false);

  const getIdHandler = () => {
    dispatch(GetByIdListCountry(countryData, user?.result.AccessToken));
  };

  const onChange = (input, value) => {
    setCountryData({ ...countryData, [input]: value });
  };

  const updateHandler = () => {
    dispatch(
      UpdateListCountry(user?.result.AccessToken, countryData.id, countryData)
    );
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
              Update Country
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
              Consult and update Country's informations .
            </Typography>{" "}
          </div>{" "}
        </div>
        <div
          style={{
            alignItems: "center",
            marginLeft: "55%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton
            type="submit"
            onClick={(countryData) => updateHandler(countryData)}
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
            name="pays"
            required
            fullWidth
            id="pays"
            label="Country"
            autoFocus
            value={countryData?.pays}
            onChange={(event) => onChange("pays", event.target.value)}
          />
          <Input
            style={gridItem}
            label="Country Risk"
            autoComplete="given-name"
            name="paysRisque"
            required
            fullWidth
            id="paysRisque"
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
            This product is saved with success !
          </Alert>
        </Stack>
      </Collapse>
    </div>
  );
}
