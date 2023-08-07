import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import adminIcon from "../../assets/adminnb.svg";
import userdash from "../../assets/userhire.svg";
import searchIcon from "../../assets/nbsearch.svg";
import hello from "../../assets/hello.svg";
import { useSelector, useDispatch } from "react-redux";
import { GetListDashboard } from "../../store/actions/dashboard";
import Charts from "../chartApex";

export default function DashContent() {
  const dispatch = useDispatch();
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "auto auto  auto  ",
  };
  const gridItem = {
    backgroundColor: "rgba(255, 255, 255, 10)",
    border: "1px solid rgba(0, 0, 0, 0.8)",

    textAlign: "center",
  };
  const gridContainer2 = {
    display: "grid",
    gridTemplateColumns: "auto auto     ",
  };

  const [dashboardData, setDashboardData] = useState();
  const { user } = useSelector((state) => state.userReducer);
  const { listDashboard } = useSelector((state) => state.dashboardReducer);
  useEffect(() => {
    user && dispatch(GetListDashboard(user?.result.AccessToken));
  }, [user]);

  useEffect(() => {
    setDashboardData(listDashboard);
  }, [listDashboard]);

  return (
    <div
      style={{
        padding: 20,
        marginLeft: 50,
      }}
    >
      {/*       <Box
        style={{ marginTop: 20 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "92.7%",
            height: "100%",
            borderRadius: 5,
            backgroundColor: "primary.backgroundPaperDash",
          },
        }}
      >
        <Paper> */}{" "}
      <div
        style={{
          width: "92.7%",

          justifyContent: "space-between",
          alignContent: "center",
          display: "flex",
          marginBottom: 15,

          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",
              }}
              sx={{ color: "primary.titleC" }}
            >
              Welcome Back
            </Typography>
          </div>{" "}
        </div>{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <img
            src={hello}
            alt="logo"
            style={{
              width: 300,
              height: 100,
              objectFit: " contain",
            }}
          />
        </div>
      </div>
      {/*    </Paper>
      </Box> */}
      <div
        style={{
          flexDirection: "column",
          marginTop: 20,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "92.7%",
          height: "100%",
        }}
      >
        {" "}
        <Grid container spacing={0} style={gridContainer}>
          <Box
            style={{ display: "flex", height: "80%" }}
            sx={{
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,

                borderRadius: 5,
                backgroundColor: "primary.backgroundPaperDash",
              },
            }}
          >
            <Paper
              style={{
                gridItem,
                width: "100%",

                height: "100%",
              }}
            >
              {" "}
              <div
                style={{
                  alignContent: "center",
                  display: "flex",
                  marginBottom: 15,

                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 50,
                    marginLeft: 50,
                  }}
                >
                  <img
                    src={userdash}
                    alt="logo"
                    style={{
                      width: 128,
                      height: 128,
                      objectFit: " contain",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.titleC" }}
                    >
                      {dashboardData?.nbUsers}
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.textC" }}
                    >
                      User
                    </Typography>{" "}
                  </div>{" "}
                </div>
              </div>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "80%",
              "& > :not(style)": {
                m: 1,

                borderRadius: 5,
                backgroundColor: "primary.backgroundPaperDash",
              },
            }}
          >
            <Paper
              style={{ gridItem, width: "120%", height: "100%", padding: 20 }}
            >
              {" "}
              <div
                style={{
                  alignContent: "center",
                  display: "flex",
                  marginBottom: 15,
                  padding: 5,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 50,
                    marginLeft: 50,
                  }}
                >
                  <img
                    src={adminIcon}
                    alt="logo"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: " contain",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.titleC" }}
                    >
                      {dashboardData?.nbAdmins}
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.textC" }}
                    >
                      Admin
                    </Typography>{" "}
                  </div>{" "}
                </div>
              </div>
            </Paper>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                height: "80%",
                borderRadius: 5,
                backgroundColor: "primary.backgroundPaperDash",
              },
            }}
          >
            <Paper
              style={{ gridItem, width: "120%", height: "80%", padding: 20 }}
            >
              {" "}
              <div
                style={{
                  alignContent: "center",
                  display: "flex",
                  marginBottom: 15,
                  padding: 5,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 50,
                    marginLeft: 50,
                  }}
                >
                  <img
                    src={searchIcon}
                    alt="logo"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: " contain",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.titleC" }}
                    >
                      {dashboardData?.nbSearch}
                    </Typography>
                    <Typography
                      variant="p"
                      gutterBottom
                      component="div"
                      style={{
                        textAlign: "left",
                      }}
                      sx={{ color: "primary.textC" }}
                    >
                      Search
                    </Typography>{" "}
                  </div>{" "}
                </div>
              </div>
            </Paper>
          </Box>
        </Grid>
      </div>
      <Box
        style={{ marginTop: 20 }}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "92.7%",
            height: 250,
            borderRadius: 5,
            backgroundColor: "primary.backgroundPaperDash",
          },
        }}
      >
        <Paper style={{}}>
          {" "}
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",

              padding: 20,
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                justifyContent: "flex-start",

                marginRight: 200,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                }}
                sx={{ color: "primary.titleC" }}
              >
                High-Risk Countries
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",
                }}
                sx={{ color: "primary.textC" }}
              >
                Stay up-to-date
              </Typography>{" "}
            </div>
            {listDashboard?.listPays && (
              <Charts
                listName={listDashboard?.listPays?.map(
                  (item, index) => item?.pays
                )}
                listValue={listDashboard?.listPays?.map(
                  (item, index) => item?.paysRisque
                )}
              />
            )}
          </div>
        </Paper>
      </Box>
    </div>
  );
}
