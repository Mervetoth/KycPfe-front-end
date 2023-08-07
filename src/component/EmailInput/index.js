import React from "react";

// or
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";

import emailIcon from "../../assets/Icon_at-sign.png";

export default function Email(props) {
  const { label, ...rest } = props;
  return (
    <TextField
      style={{ width: "650px" }}
      label={label}
      {...rest}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <img
              src={emailIcon}
              style={{ width: 15, height: 15, objectFit: "contain" }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
}
