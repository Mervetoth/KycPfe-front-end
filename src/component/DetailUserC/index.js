import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import PrimaryButton from "../button";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Warning from "../../assets/warning.png";
import LeftChevron from "../../assets/Icon_chevron-left-cancel.png";
import { Avatar, Divider, Grid } from "@mui/material";
import { GetByIdListUser } from "../../store/actions/user";
import moment from "moment";
import CharteRisqueClient from "../charteRisqueClient";
import { useSearchParams } from "react-router-dom";

export default function CustomModal(props) {
  const dispatch = useDispatch();
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    columnGap: "20px",
    rowGap: "20px",
    padding: "15px",
  };
  const gridItem = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",

    padding: "15px",
    fontSize: "30px",
    textAlign: "center",
  };
  const [searchParams] = useSearchParams();
  const [userData, setUserData] = useState();
  const { user, getNewListUser } = useSelector((state) => state.userReducer);
  const { open, setOpen, item } = props;

  useEffect(() => {
    setUserData(getNewListUser);
  }, [getNewListUser]);
  const onChange = (input, value) => {
    setUserData({ ...userData, [input]: value });
  };

  const style = {
    /*     position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minHeight: "150vh",
    maxHeight: "150vh",
    minWidth: "150vh",
    maxWidth: "150vh",
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    padding: 4,
    overflow: "sroll", */
    position: "absolute",
    bgcolor: "background.paper",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    overflow: "auto",
    height: "100%",
    minWidth: "150vh",
    maxWidth: "150vh",
    display: "block",
    borderRadius: 5,
    boxShadow: 24,
    padding: 4,
    marginTop: 2,
  };
  console.log(userData?.firstName);
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
          <div>
            <div
              style={{
                alignContent: "space-between",
                display: "flex",
                padding: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                {item?.avatar?.length > 0 ? (
                  <Avatar
                    style={{
                      width: 46,
                      height: 46,
                    }}
                  >
                    <img
                      src={
                        "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/130966232_2870830539870868_5844720196786723551_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FnqjMyNxregAX9jp960&_nc_ht=scontent.ftun16-1.fna&oh=00_AT9e77J2elqc83c7m_UrnYxzAGXvfLecsPaL33vjDYpHjQ&oe=62AEA461"
                      }
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Avatar>
                ) : (
                  <Avatar sx={{ bgcolor: "primary.backgroundPaperDash" }}>
                    {item?.firstName?.charAt(0)}
                    {item?.lastName?.charAt(0)}
                  </Avatar>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "left",

                      color: "#2B29D4",
                    }}
                  >
                    {item?.firstName} {item?.lastName}
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "left",

                      color: " #525B94 ",
                    }}
                  >
                    See Informations about this user , Click on KYC to consult
                    the affiche or print it .
                  </Typography>{" "}
                </div>{" "}
              </div>
            </div>
            <Divider
              style={{
                backgroundColor: "#cdcaed8d",
                marginTop: 20,
                marginbottom: 40,
              }}
            />

            {/* ////////////////////////elll rassmi  */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  marginLeft: 40,
                  marginTop: 60,
                  marginBottom: 40,
                  alignContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  style={{
                    textAlign: "left",

                    color: "#2B29D4",
                  }}
                >
                  Client risk
                </Typography>

                <Typography
                  variant="p"
                  gutterBottom
                  component="div"
                  style={{
                    textAlign: "left",
                    marginRight: 20,
                    color: " #525B94 ",
                  }}
                >
                  Visualize the Client risk attributes .
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-end",
                }}
              >
                <CharteRisqueClient item={item} />
              </div>
            </div>

            <div style={{ marginLeft: 60 }}>
              {" "}
              <Grid style={gridContainer}>
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      First Name
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.firstName}

                      {/* {(event) => onChange("firstName", event.target.value)} */}
                    </Typography>
                  </div>
                </div>

                {/* ///////////////////////////////////lstnm */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Last name
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.lastName}
                    </Typography>
                  </div>
                </div>
                {/* /////////////////////////////////// Gender */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Gender
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.gender}
                    </Typography>
                  </div>
                </div>
                {/* ///////////////////////////////////email */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.email}
                    </Typography>
                  </div>
                </div>

                {/* ///////////////////////////////////dob */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Birth date
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.birthDate}
                    </Typography>
                  </div>
                </div>

                {/* /////////////////////////////////// cin*/}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      CIN
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.cin}
                    </Typography>
                  </div>
                </div>
                {/* /////////////////////////////////// phonenumber*/}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Phone number
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.telNumber}
                    </Typography>
                  </div>
                </div>
                {/* ///////////////////////////////////created att */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Created at
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {moment(item?.createdAt).format("L")}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>

            <Divider
              style={{
                backgroundColor: "#cdcaed8d",
                marginTop: 20,
              }}
            />
            <div style={{ marginLeft: 40, marginTop: 20 }}>
              {" "}
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",

                  color: "#2B29D4",
                }}
              >
                Adress:
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",

                  color: " #525B94 ",
                }}
              >
                Informations about the user address
              </Typography>
            </div>
            <div style={{ marginLeft: 60 }}>
              {" "}
              <Grid style={gridContainer}>
                {/* ///////////////////////////////////pays */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Country
                    </Typography>{" "}
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    ></Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      Tunisia
                    </Typography>
                  </div>
                </div>
                {/* /////////////////////////////////// City */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      City
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.city}
                    </Typography>
                  </div>
                </div>
                {/* /////////////////////////////////// Postalccc */}
                <div
                  style={{
                    gridItem,
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: 25,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",
                      }}
                    >
                      Postal code
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        display: "inline-block",
                        color: " #525B94 ",
                        marginTop: 6,
                      }}
                    >
                      {item?.postalCode}
                    </Typography>
                  </div>
                </div>{" "}
              </Grid>
            </div>
          </div>
          <Divider
            style={{
              backgroundColor: "#cdcaed8d",
              marginTop: 20,
            }}
          />
          <div style={{ marginLeft: 40, marginTop: 20 }}>
            {" "}
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",

                color: "#2B29D4",
              }}
            >
              Product:
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",

                color: " #525B94 ",
              }}
            >
              Informations about the user product
            </Typography>
          </div>
          <div style={{ marginLeft: 60 }}>
            {" "}
            <Grid style={gridContainer}>
              {/* ///////////////////////////////////pays */}
              <div
                style={{
                  gridItem,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "left",
                      marginRight: 20,
                      display: "inline-block",
                      color: "#2B29D4",
                    }}
                  >
                    Name
                  </Typography>{" "}
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "left",
                      marginRight: 20,
                      display: "inline-block",
                      color: "#2B29D4",
                    }}
                  ></Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    component="div"
                    style={{
                      textAlign: "left",
                      display: "inline-block",
                      color: " #525B94 ",
                      marginTop: 6,
                    }}
                  >
                    {item?.produitId}
                  </Typography>
                </div>
              </div>
            </Grid>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
