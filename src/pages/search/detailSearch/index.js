import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { GetByIdListSearch } from "../../../store/actions/search";
import { Avatar, Divider, Grid } from "@mui/material";

export default function DetailRech(props) {
  const dispatch = useDispatch();
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: " auto auto",
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
  const { open, setOpen } = props;
  const [searchData, setSearchData] = useState();
  const { user } = useSelector((state) => state.userReducer);
  const { listGetByIdSearch } = useSelector((state) => state.searchReducer);
  useEffect(() => {
    dispatch(
      GetByIdListSearch(
        {
          id: "628f9e3578b87d3f593786d4",
        },
        user?.result.AccessToken
      )
    );
  }, []);

  useEffect(() => {
    setSearchData(listGetByIdSearch);
  }, [listGetByIdSearch]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "80%",
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
          <div>
            {/* ////////////////////////elll rassmi  */}
            <div style={{ marginLeft: 40, marginTop: 60, marginbottom: 40 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                style={{
                  textAlign: "left",

                  color: "#2B29D4",
                }}
              >
                Search Informations
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
                Informations about serach .
              </Typography>
            </div>
            <div style={{ marginLeft: 60, marginTop: 60 }}>
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
                      {searchData?.lastName}
                    </Typography>
                  </div>
                </div>
                {/* ///////////////////////////////////Status */}
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
                      Status
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
                      {searchData?.status}
                    </Typography>
                  </div>
                </div>
                {/* /////////////////////////////////// Admin */}
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
                      Admin id
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
                      {searchData?.adminId}
                    </Typography>
                  </div>
                </div>

                {/* ///////////////////////////////////Corrependences */}
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
                      Corrependences list
                    </Typography>
                    <Typography
                      sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
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
                      {/*   {searchData?.listeCorr} */}
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
                      {searchData?.firstName}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
