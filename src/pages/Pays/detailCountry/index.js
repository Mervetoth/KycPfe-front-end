import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/Icon_user-plus.png";
import PhoneInput from "react-phone-input-2";
////////////////////:

import Input from "../../../component/input";
import PasswordInput from "../../../component/passwordInput";
////////////////
export default function AddAdmin() {
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
    <div style={{ width: "100%" }}>
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
              width: 50,
              height: 50,
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
              Add admin
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
            marginLeft: "38%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton style={{ backgroundColor: "primary.main" }}>
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
          />
          <Input
            style={gridItem}
            label="Last Name"
            autoComplete="given-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
          />
          <Input
            style={gridItem}
            label="Gender"
            autoComplete="given-name"
            name="gender"
            required
            fullWidth
            id="gender"
          />
          <Input
            style={gridItem}
            label="E-mail"
            autoComplete="given-name"
            name="email"
            required
            fullWidth
            id="email"
          />
          <Input
            style={gridItem}
            label="Phone number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <PasswordInput
            style={gridItem}
            label="Password"
            autoComplete="given-name"
            name="confirmPassword"
            required
            fullWidth
            id="confirmPassword"
          />
          <PasswordInput
            style={gridItem}
            label="Confirm password"
            autoComplete="given-name"
            name="confirmPassword"
            required
            fullWidth
            id="confirmPassword"
          />
        </Grid>
      </div>
      <Divider variant="fullWidth" style={{ marginBlock: 15 }} />
    </div>
  );
}
