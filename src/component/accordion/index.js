import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, Grid, IconButton } from "@mui/material";
import Icon_check from "../../assets/Icon_check-square.png";
import Trash from "../../assets/Icon_trash.png";
import CorrespendenceList from "../CorrespendenceList/AkasList";
import PassportList from "../CorrespendenceList/PassportList";
import AddressList from "../CorrespendenceList/AdressList";
import ActionItem from "../CorrespendenceList/ActionItem";
import CustomModal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import ProgramItems from "../CorrespendenceList/ProgramsItems";
import { DeleteListProduct } from "../../store/actions/product";
import { styled, useTheme } from "@mui/material/styles";
export default function ControlledAccordions(props) {
  const dispatch = useDispatch;
  const { user } = useSelector((state) => state.userReducer);
  const { item, handleDelete, handleAdd, listAdded, listDeleted } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  //
  const handleOpen = (e, item) => {
    setOpen(true);
    e.stopPropagation();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    setOpen(false);
    handleDelete(item);
  };

  const handleAddClick = (e) => {
    handleAdd(item);
    e.stopPropagation();
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(item.akas);
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        marginLeft: 40,
        minHeight: 70,
        marginBottom: 20,
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          borderRadius: "10px",
          borderColor: listAdded?.some((obj, index) => item?._id === obj?._id)
            ? theme.palette.success.main
            : "transparent",
          borderWidth: 3,
          borderStyle: "solid",
        }}
        disabled={listDeleted?.some((obj, index) => item?._id === obj?._id)}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
              }}
            >
              {item.score >= 80 && item.score <= 100 ? (
                <div
                  style={{
                    alignItems: "baseline",
                    borderRadius: 5,
                    backgroundColor: "#FFE8EF",
                    height: "25px",
                    width: "35px",
                    marginRight: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#E65A83",
                      flexShrink: 0,
                    }}
                    body2
                  >
                    {item.score}
                  </Typography>
                </div>
              ) : item.score >= 50 && item.score <= 80 ? (
                <div
                  style={{
                    alignItems: "baseline",
                    borderRadius: 5,
                    backgroundColor: "#DEFFF5",
                    height: "25px",
                    width: "35px",
                    marginRight: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#38C99E",
                      flexShrink: 0,
                    }}
                    body2
                  >
                    {item.score}
                  </Typography>
                </div>
              ) : (
                <div
                  style={{
                    alignItems: "baseline",
                    borderRadius: 5,
                    backgroundColor: "#DEFFF5",
                    height: "25px",
                    width: "35px",
                    marginRight: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#38C99E",
                      flexShrink: 0,
                    }}
                    body2
                  >
                    {item.score}
                  </Typography>
                </div>
              )}

              <Typography
                variant="body1"
                gutterBottom
                component="div"
                style={{
                  display: "inline-block",
                  minWidth: 450,
                  textAlign: "left",
                  color: "#404875",
                  marginRight: 50,
                }}
              >
                {item.fullName}
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                component="div"
                noWrap
                style={{
                  wordSpacing: 5,
                  /* textAlign: "left", */
                  display: "inline-block",
                  color: " #56619E",

                  minWidth: 600,
                  display: "flex",
                  marginRight: 20,
                }}
              >
                {item.dob}
                {item.gender && item?.dob ? ` | ${item.gender} ` : item.gender}
                {(item.gender || item.dob) && item.citizenship?.length > 0
                  ? ` | ${item?.citizenship[0]} `
                  : item?.citizenship[0]}
              </Typography>
            </div>{" "}
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                style={{
                  marginRight: 15,
                  borderRadius: "25%",
                  backgroundColor: "#FFE8EF",
                }}
                onClick={(event) => handleOpen(event)}
              >
                <img
                  src={Trash}
                  alt="logo"
                  style={{
                    width: 10,
                    height: 10,
                    objectFit: " contain",
                  }}
                />
              </IconButton>{" "}
              <IconButton
                style={{
                  borderRadius: "25%",
                  backgroundColor: "#DEFFF5",
                }}
                onClick={(event) => handleAddClick(event)}
              >
                <img
                  src={Icon_check}
                  alt="logo"
                  style={{
                    width: 10,
                    height: 10,
                    objectFit: " contain",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Grid container spacing={0}>
              {item.akas.length > 0 && (
                <div style={{ marginBlock: 20, width: "100%" }}>
                  <CorrespendenceList akas2={item.akas} />
                </div>
              )}

              {item.addresses.length > 0 && (
                <div style={{ marginBlock: 20, width: "100%" }}>
                  {" "}
                  <AddressList addresse={item.addresses} />{" "}
                </div>
              )}

              {item.passports.length > 0 && (
                <div style={{ marginBlock: 20, width: "100%" }}>
                  <PassportList passports={item.passports} />
                </div>
              )}
              {item.action && (
                <div style={{ marginBlock: 20, width: "100%" }}>
                  <ActionItem action2={item.action} />{" "}
                </div>
              )}
              {item.programs.length > 0 && (
                <div style={{ marginBlock: 20, width: "100%" }}>
                  <ProgramItems program={item.programs} />{" "}
                </div>
              )}
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
      <CustomModal
        title={`are you sure to delete this search  ?`}
        open={open}
        setOpen={(value) => setOpen(value)}
        onClick={() => handleDeleteClick()}
      />
    </div>
  );
}
