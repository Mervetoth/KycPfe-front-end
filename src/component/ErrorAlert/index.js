import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          style={{
            color: "#E65A83",
            backgroundColor: "#FFE8EF",

            borderRadius: "10px",
            boxShadow: " 1px 1px 1px #E8ABDA",
          }}
          severity="error"
        >
          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              marginLeft: 20,
              color: "#E65A83",
            }}
          >
            Error message !{" "}
          </Typography>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
