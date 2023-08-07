import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Icon_eye_off from "../../assets/Icon_eye-off.png";
import Icon_eye from "../../assets/Icon_eye.png";

export default function PasswordInput(props) {
  const { label } = props;
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });

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

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
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
                      src={Icon_eye_off}
                      alt="logo"
                      style={{
                        width: 20,
                        height: 20,
                        objectFit: " contain",
                      }}
                    />
                  ) : (
                    <img
                      src={Icon_eye}
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
            label={label}
          />
        </FormControl>
      </div>
    </Box>
  );
}
