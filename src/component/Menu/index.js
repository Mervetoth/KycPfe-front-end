import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router-dom";

import Logout from "../../assets/logout.png";
import Notif from "../../assets/notif.png";

import { Avatar, Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

import CustomModal from "../Modal";

import MyAccount from "../../assets/Icon_user.png";
import Admin from "../../assets/admin.png";
import Icon_user from "../../assets/Icon_user.png";
import Product from "../../assets/product.png";
import Dashboard from "../../assets/dashboard.png";
import Icon_burger from "../../assets/Icon_burger2.png";
import Kyc from "../../assets/search11.png";
import Historique from "../../assets/searchhist.png";
import Country from "../../assets/country.png";
import NotificationItem from "../Notification";
import light from "../../assets/light.png";
import night from "../../assets/night.png";
import { setAuth } from "../../store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/actions";

const drawerWidth = 250;

export default function MiniDrawer() {
  const openedMixin = () => ({
    backgroundColor: theme.palette.primary.navBar,
    /* backgroundColor: "#24243C", */

    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = () => ({
    backgroundColor: theme.palette.primary.navBar,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  /////////modal/////
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const handleOpenModal = (e) => {
    setOpenModal(true);
    e.stopPropagation();
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  /////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open_ = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = useSelector((state) => state.userReducer);
  /////////////////////////:notiiiiiif
  const [anchorNotif, setAnchorNotif] = React.useState(null);

  const openNotif = Boolean(anchorNotif);
  const handleClickNotif = (event) => {
    setAnchorNotif(event.currentTarget);
  };
  const handleCloseNotif = () => {
    setAnchorNotif(null);
  };

  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState(true);
  const handleClickShowPassword = (value) => {
    setValues(value);
    dispatch(setTheme(value ? "light" : "dark"));
  };

  const logout = () => {
    navigate("/Login");
    localStorage.removeItem("user");
    dispatch(setAuth(null));
  };
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          borderBottomColor: "#cdcaed8d",
          backgroundColor: "white",
        }}
        style={{
          boxShadow: "none",
          borderBottomWidth: 1,
          borderBottomStyle: "inset",
        }}
      >
        <Toolbar sx={{ backgroundColor: theme.palette.primary.navBar }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
            style={{
              borderRadius: "25%",
              backgroundColor: "#cdcaed8d",
            }}
          >
            <img
              src={Icon_burger}
              alt="logo"
              style={{
                width: 20,
                height: 20,
                objectFit: " contain",
              }}
            />
          </IconButton>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "auto",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <React.Fragment>
                {/* //////////////////////////////////// */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  style={{
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      marginRight: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="toggle dark mode"
                      onClick={() => handleClickShowPassword(!values)}
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      {!values ? (
                        <img
                          src={night}
                          alt="logo"
                          style={{
                            width: 20,
                            height: 20,
                            objectFit: " contain",
                          }}
                        />
                      ) : (
                        <img
                          src={light}
                          alt="logo"
                          style={{
                            width: 20,
                            height: 20,
                            objectFit: " contain",
                          }}
                        />
                      )}
                    </IconButton>
                  </div>

                  <Tooltip title="Notification">
                    <Badge
                      style={{}}
                      /*     badgeContent={2}
                      variant="dot" */
                      color="secondary"
                    >
                      <IconButton
                        onClick={handleClickNotif}
                        style={{
                          borderRadius: "25%",
                          backgroundColor: "#cdcaed8d",
                        }}
                      >
                        <img
                          src={Notif}
                          alt="logo"
                          style={{
                            width: 20,
                            height: 20,
                            objectFit: " contain",
                          }}
                        />
                      </IconButton>
                    </Badge>
                  </Tooltip>
                </Box>
                <Menu
                  anchorNotif={anchorNotif}
                  id="account-menu-notif"
                  open={openNotif}
                  onClose={handleCloseNotif}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "hidden",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 465, vertical: 668 }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <NotificationItem />
                </Menu>
                {/* //////////////////////////////////// */}
              </React.Fragment>
            </div>
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: 0,
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open_ ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open_ ? "true" : undefined}
                  >
                    {" "}
                    <IconButton
                      aria-label="Profile photo"
                      style={{}}
                      sx={{ width: 35, height: 35 }}
                    >
                      {user?.avatar?.length > 0 ? (
                        <Avatar
                          sx={{ width: 35, height: 35 }}
                          src={
                            "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/269685212_3060751380839777_2317685994731860454_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qyMRCZJtJTkAX96ihud&tn=ku8brVjUY1smlZye&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-P5YKRXUq1YKUoXEwhqYJLtBien1Ii5C1ho1zNiDf5cw&oe=62A64638"
                          }
                        />
                      ) : (
                        <Avatar sx={{ bgcolor: "primary.backgroundPaperDash" }}>
                          {user?.result?.firstName?.charAt(0)}
                          {user?.result?.lastName?.charAt(0)}
                        </Avatar>
                      )}
                    </IconButton>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                //  anchorEl={anchorEl}
                id="account-menu"
                open={open_}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "hidden",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 10,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
              >
                <MenuItem onClick={() => navigate("/MyAccount")}>
                  <ListItemIcon>
                    <IconButton
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        /*  */
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={MyAccount}
                        alt="logo"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  </ListItemIcon>
                  My account
                </MenuItem>
                <Divider style={{ backgroundColor: "#cdcaed8d" }} />

                <MenuItem onClick={(e) => handleOpenModal(e)}>
                  <ListItemIcon>
                    <IconButton
                      style={{
                        /*  */
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Logout}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ display: "flex" }}>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
            {/* logoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo app */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              {open && (
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/282632240_379841207540586_1314717104657265485_n.png?stp=dst-png_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=UFTK0aR_DI8AX97wX2j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVISY1_pN2QjrLgihTsLKAFKeQ8IcsRcuYml4AbshBI59w&oe=62B24C32"
                  style={{
                    height: 300,
                    width: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                />
              )}
            </div>
          </div>

          <IconButton
            style={{ backgroundColor: "#cdcaed8d" }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider
          style={{
            backgroundColor: "#cdcaed8d",
          }}
        />
        <div
          style={{
            alignContent: "space-between",
            flex: 1,
            display: "flex",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: open && "80%",
              flexDirection: "column",
              alignContent: "space-between",
              flex: 1,
            }}
          >
            <List style={{}}>
              {[
                {
                  value: "Dashboard",
                  path: "/",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Dashboard}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
              ].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={() => navigate(text.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Divider style={{ backgroundColor: "#cdcaed8d" }} />
            <List style={{ fontColor: theme.palette.primary.menuFont }}>
              {[
                {
                  value: "User",
                  path: "/ListUser",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Icon_user}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
                {
                  value: "KYC",
                  path: "/AddSearch",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Kyc}
                        alt="logo"
                        style={{
                          width: 20,
                          height: 20,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
                {
                  value: "Search history ",
                  path: "/SearchHistory",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Historique}
                        alt="logo"
                        style={{
                          width: 20,
                          height: 20,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
              ].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={() => navigate(text.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
              {[].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={() => navigate(text.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Divider style={{ backgroundColor: "#cdcaed8d" }} />
            <List style={{}}>
              {[
                {
                  value: "Product",
                  path: "/ListProduct",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Product}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
                {
                  value: "Country",
                  path: "/ListCountry",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Country}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
              ].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={() => navigate(text.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Divider style={{ backgroundColor: "#cdcaed8d" }} />

            <List style={{}}>
              {[
                {
                  value: "Admin",
                  path: "/ListAdmin",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Admin}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
              ].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={() => navigate(text.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Divider style={{ backgroundColor: "#cdcaed8d" }} />
          </div>

          <div
            style={{
              display: "flex",

              flexDirection: "column",
              alignContent: "space-between",
            }}
          >
            <List
              style={{
                justifyContent: open ? "initial" : "center",
              }}
            >
              {[
                {
                  value: "Logout",
                  path: "/Login",
                  icone: (
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#cdcaed8d",
                      }}
                    >
                      <img
                        src={Logout}
                        alt="logo"
                        style={{
                          width: 15,
                          height: 15,
                          objectFit: " contain",
                        }}
                      />
                    </IconButton>
                  ),
                },
              ].map((text) => (
                <ListItemButton
                  key={text.value}
                  onClick={(e) => handleOpenModal(e)}
                  sx={{
                    px: 2.5,
                  }}
                  style={{
                    alignContent: open ? "flex-end" : "flex-end",
                    justifyContent: open ? "initial" : "center",
                    flex: open ? 1 : 1,

                    /*  marginTop: open ? "89%" : "478%", */
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icone}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.value}
                    sx={{ opacity: open ? 1 : 0, color: "primary.menuTextC" }}
                  />
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
      </Drawer>

      <Box
        component="main"
        sx={{ backgroundColor: "primary.backgroundc", flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
      <CustomModal
        title="Are you sure you want to logout ?"
        open={openModal}
        setOpen={(value) => setOpenModal(value)}
        onClick={() => logout()}
      />
    </Box>
  );
}
