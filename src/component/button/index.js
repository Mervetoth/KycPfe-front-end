import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

const style = { backgroundColor: "#b1aaf2", color: "#2B29D4" };
export default function PrimaryButton(props) {
  const navigate = useNavigate();
  const { children, ...rest } = props;
  return (
    <Button variant="contained" style={style} {...rest}>
      {children}
    </Button>
  );
}
