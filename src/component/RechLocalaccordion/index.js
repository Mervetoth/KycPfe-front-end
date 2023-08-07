import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import CharteRisqueClient from "../charteRisqueClient";
const gridItem = {
  padding: "15px",
  fontSize: "30px",
  textAlign: "center",
};
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  columnGap: "20px",
  rowGap: "20px",
  padding: "15px",
};
export default function RechLocalAcc(props) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { user } = useSelector((state) => state.userReducer);
  const { listLocalSearch } = useSelector((state) => state.searchReducer);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    setSearchData(listLocalSearch);
  }, [listLocalSearch]);
  const { item } = props;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginLeft: 40,
        minHeight: 70,
        marginTop: 20,
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ borderRadius: "10px", width: "80%" }}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{}}
        >
          <div
            style={{
              display: "flex",
              width: "100%",

              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "baseline",
              }}
            >
              {searchData?.email ? (
                <div
                  style={{
                    width: "200px",
                    borderRadius: 5,
                    backgroundColor: "#DEFFF5",
                    padding: 10,

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
                    Found
                  </Typography>
                </div>
              ) : (
                <div
                  style={{
                    width: "200px",
                    borderRadius: 5,
                    backgroundColor: "#FFE8EF",
                    padding: 10,

                    marginRight: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: " #E65A83",
                      flexShrink: 0,
                    }}
                    body2
                  >
                    Not Found
                  </Typography>
                </div>
              )}

              <div
                style={{
                  width: "100%",
                  alignContent: "center",
                  marginTop: 10,
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "flex-start",
                  marginLeft: "90px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
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
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",

                        fontWeight: "bold",
                      }}
                    >
                      First name
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
                      {searchData?.firstName}

                      {/* {(event) => onChange("firstName", event.target.value)} */}
                    </Typography>
                  </div>
                </div>

                {/* ///////////////////////////////////lstnm */}
                <div
                  style={{
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
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                        marginRight: 20,
                        display: "inline-block",
                        color: "#2B29D4",

                        fontWeight: "bold",
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
                      {searchData?.lastName}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "flex-end",
              }}
            >
              <CharteRisqueClient item={searchData} />
            </div>
            <Grid container spacing={0}>
              <div style={{ marginLeft: 0 }}>
                <Grid style={gridContainer}>
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {searchData?.firstName}
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {searchData?.email}
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {searchData?.birthDate}
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {searchData?.cin}
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {searchData?.telNumber}
                      </Typography>
                    </div>
                  </div>
                  {/* ///////////////////////////////////pays */}
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
                        }}
                      >
                        Country
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
                        {searchData?.paysId}
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
                      marginRight: 0,
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        Gabes
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        6050
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
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                        style={{
                          textAlign: "left",
                          marginRight: 20,
                          display: "inline-block",
                          color: "#2B29D4",
                          marginTop: 5,
                          fontWeight: "bold",
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
                        {moment(searchData?.createdAt).format("L")}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
