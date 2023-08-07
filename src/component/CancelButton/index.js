import React from "react";

import { Button } from "@mui/material";

const style = {
  backgroundColor: "white",
  color: "black",
  textTransform: "white",
};
export default function CancelButton(props) {
  const { children, ...rest } = props;
  return (
    <Button variant="outlined" style={style} {...rest}>
      {children}
    </Button>
  );
}
