import { Grid, TextField } from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { withStyles } from "@material-ui/core/styles";
const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.light,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.light,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.light,
      },
    },
  },
}))(TextField);
export default function Input(props) {
  const { label, ...rest } = props;
  const theme = useTheme();

  return (
    <div>
      <Grid item xs={12} sm={6} style={{ width: "300px" }}>
        <CssTextField
          label={label}
          {...rest}
          style={{ width: "100%" }}
          color="primary"
        />
      </Grid>
    </div>
  );
}
