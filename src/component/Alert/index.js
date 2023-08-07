import { Alert, Typography } from "@mui/material";
import React from "react";

export default function AlertC() {
  return (
    <Alert
      style={{
        color: "#E65A83",
        backgroundColor: "#FFE8EF",
        width: "80%",
        marginLeft: 40,
        padding: 10,
        minHeight: 70,
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
          marginLeft: 50,
          color: "#E65A83",
        }}
      >
        Not found correspondences !
      </Typography>
    </Alert>
  );
}
