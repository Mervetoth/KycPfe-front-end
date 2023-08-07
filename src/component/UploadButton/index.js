import { Button, TextField } from "@material-ui/core";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import PhotoCamera from "../../assets/upload.png";
import IconButton from "@mui/material/IconButton";

const Input = styled("input")({
  display: "none",
});
export default function UploadButton() {
  return (
    <div>
      <div
        style={{
          marginLeft: 20,
          width: "575px",
          height: 120,
          border: "1px solid",
          borderColor: "#C3C2C4",
          borderRadius: 5,
        }}
      >
        {" "}
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <div>
            <IconButton
              style={{
                marginTop: 10,
                borderRadius: "25%",
                backgroundColor: "#cdcaed8d",
              }}
            >
              <img
                src={PhotoCamera}
                alt="logo"
                style={{
                  width: 22,
                  height: 22,
                  objectFit: " contain",
                }}
              />
            </IconButton>
          </div>
          <div>
            <Typography
              variant="caption"
              gutterBottom
              component="div"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "  #595CA4",
                display: "inline-block",
              }}
            >
              Click to upload
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              component="div"
              style={{
                marginLeft: 5,
                textAlign: "center",
                color: " #56619E",
                display: "inline-block",
              }}
            >
              {" "}
              or drag and drop <br />
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              component="div"
              style={{
                textAlign: "center",
                color: " #56619E",
              }}
            >
              {" "}
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </div>
        </label>
      </div>
    </div>
  );
}
