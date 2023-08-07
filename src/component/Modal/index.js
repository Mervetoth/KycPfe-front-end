import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import PrimaryButton from "../button";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import React from "react";
import Warning from "../../assets/warning.png";
import LeftChevron from "../../assets/Icon_chevron-left-cancel.png";

export default function CustomModal(props) {
  const {
    open,
    setOpen,
    title,
    onClick,
    handleDelete,
    selectedItem,
    setSelectedItem,
  } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 600,
    minHeight: 300,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      // keepMounted
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Fade in={open}>
        <Box sx={style}>
          <img
            src={Warning}
            alt="logo"
            style={{
              width: 50,
              height: 50,
              marginBottom: 10,
              objectFit: " contain",
            }}
          />
          <Typography component="h2" variant="h4" style={{ marginBottom: 10 }}>
            Titre
          </Typography>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <React.Fragment>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <Button
                variant="text"
                onClick={() => setOpen(false)}
                startIcon={
                  <img
                    src={LeftChevron}
                    alt="logo"
                    style={{
                      width: 10,
                      height: 10,
                      objectFit: " contain",
                    }}
                  />
                }
              >
                Cancel
              </Button>
              <PrimaryButton
                variant="contained"
                style={{ Color: "primary" }}
                onClick={() => onClick()}
              >
                Yes
              </PrimaryButton>
            </div>
          </React.Fragment>
        </Box>
      </Fade>
    </Modal>
  );
}
