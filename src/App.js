import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/admin/login/Index";
import MyAccount from "./pages/admin/myAccount";
import Register from "./pages/admin/register";
import MotDePasse from "./pages/admin/forgotPassword";
import Dashboard from "./pages/Dashboard/index";

//listing
import Admin from "./pages/admin/listingAdmin";
import User from "./pages/user/listingUser";
import Produit from "./pages/Produit/listProduct/Index";
import Pays from "./pages/Pays/listCountry/Index";
//
import AddSearch from "./pages/search/addSearch";
import AddProduct from "./pages/Produit/addProduct";
import AddCountry from "./pages/Pays/addCountry";
import AddAdmin from "./pages/admin/addAdmin";
import AddUser from "./pages/user/addUser";
//
import EditCountry from "./pages/Pays/editCountry";
import EditProduct from "./pages/Produit/editProduct";
import EditAdmin from "./pages/admin/editAdmin";
import EditUser from "./pages/user/editUser";
import EditSearch from "./pages/search/editSearch";
//

//
import DashContent from "./component/dashboardContent";
import DetailProduit from "./pages/Produit/detailProduct";
import DetailPays from "./pages/Pays/detailCountry";
import DetailUser from "./pages/user/detailUser";
import DetailSearch from "./pages/search/detailSearch";
//
import HistoriqueDeRecherche from "./pages/search/searchHistory";
import AfficheKYC from "./pages/search/afficheKyc";
//
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from "@material-ui/core/colors";
import { setAuth } from "./store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import ResetPassword from "./pages/admin/reset pass";
const darkTheme = createTheme({
  palette: {
    background: {
      main: "#1B1C31",
    },
    primary: {
      main: "#2B29D4",
      color: "primary.titleC",
      backgroundPaperDash: "#81809E",
      navBar: "#24243C",
      primary2: "#2B29D4",
      backgroundc: "#1B1C31",
      borderc: "#cdcaed8d",
      c_red: "#E65A83",
      c_yellow: "#F2CF7B",
      c_green: " #38C99E",
      bc_red: "#FFE8EF",
      bc_green: "#DEFFF5",
      bc_yellow: "#FFF2D4",
      titleC: "#CBD2D9",
      textC: "#9AA5B1",
      menuTextC: "#7D808F",
      menuFont: "#7D808F",
      listC: "#CBD2D9",
      rowsC: "#D9E2EC",
    },
    secondary: {
      main: "#E65A83",
    },
    error: {
      main: "#fefefe",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    background: {
      main: "#F9F8FB",
    },
    primary: {
      main: "#2B29D4",
      backgroundPaperDash: "#E3E2F5",
      navBar: "white",
      backgroundc: "#F9F8FB",
      borderc: "#cdcaed8d",
      c_red: "#E65A83",
      c_yellow: "#F2CF7B",
      c_green: " #38C99E",
      bc_red: "#FFE8EF",
      bc_green: "#DEFFF5",
      bc_yellow: "#FFF2D4",
      titleC: "#2B29D4",
      menuTextC: "black",
      textC: " #525B94",
      listC: "white",
      backgroundAppBar: "white",
    },
    secondary: {
      main: "#E65A83",
    },
    error: {
      main: "#fefefe",
    },
  },
  /*   typography: {
    fontFamily: "Roboto",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }, */
});
function App() {
  const { theme } = useSelector((state) => state.uiReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setAuth(JSON.parse(user)));
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ForgotPassword" element={<MotDePasse />} />

          <Route path="/" element={<Dashboard />}>
            <Route exact path="/" element={<DashContent />} />
            / /////lists
            <Route path="/ListProduct" element={<Produit />} />{" "}
            <Route path="/ListCountry" element={<Pays />} />
            <Route path="/ListAdmin" element={<Admin />} />
            <Route path="/ListUser" element={<User />} />
            / /////add
            <Route path="/AddCountry" element={<AddCountry />} />
            <Route path="/AddSearch" element={<AddSearch />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/AddAdmin" element={<AddAdmin />} />
            / /////edit
            <Route path="/EditProduct" element={<EditProduct />} />
            <Route path="/EditCountry" element={<EditCountry />} />
            <Route path="/EditAdmin" element={<EditAdmin />} />
            <Route path="/EditUser" element={<EditUser />} />
            <Route path="/EditSearch" element={<EditSearch />} />
            / /////deatil
            <Route path="/DetailProduct" element={<DetailProduit />} />
            <Route path="/DetailCountry" element={<DetailPays />} />
            <Route path="/DetailUser" element={<DetailUser />} />
            <Route path="/DetailSearch" element={<DetailSearch />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            / //// kyyc
            <Route path="/AfficheKYC" element={<AfficheKYC />} />
            <Route path="/SearchHistory" element={<HistoriqueDeRecherche />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
