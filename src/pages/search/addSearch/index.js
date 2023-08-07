import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import icon_add from "../../../assets/addsearch.png";
import { useSelector, useDispatch } from "react-redux";
import PrimaryButton from "../../../component/button";
import PhoneInput from "react-phone-input-2";
////////////////////:

import Input from "../../../component/input";

import ControlledAccordions from "../../../component/accordion";
import SearchIcon from "@mui/icons-material/Search";
import AddUser from "../../user/addUser";
import {
  GetInternationalSearch,
  GetLocalSearch,
  setAddUserSuccess,
} from "../../../store/actions";
import RechLocalAcc from "../../../component/RechLocalaccordion";
import AlertC from "../../../component/Alert";
import CharteRisqueClient from "../../../component/charteRisqueClient";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import { getInternationalSearch } from "../../../store/actions/search";
////////////////
export default function AddSearch() {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    password: "",

    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
  /*   useEffect(() => {
    dispatch(GetLocalSearch(searchData, user?.result.AccessToken));
  }, []); */

  /* //////////////////////////////////////local */
  const [showAlert, setShowAlert] = useState(false);
  const [searchData, setSearchData] = useState({
    firstName: "",
    lastName: "",
    cin: "",
  });

  const [internationalData, setInternationalData] = useState({
    firstName: "",
    lastName: "",
  });
  const { user, addUserSuccess } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (addUserSuccess) {
      dispatch(getInternationalSearch([]));
      dispatch(setAddUserSuccess(false));
      setShowAlert(true);
    }
  }, [addUserSuccess]);

  const { localSearch, internationalSearchIsLoading } = useSelector(
    (state) => state.searchReducer
  );
  const { listInternationalSearch } = useSelector(
    (state) => state.searchReducer
  );
  /*   useEffect(() => {
    setInternationalData(listInternationalSearch);
  }, [listInternationalSearch]); */
  /*  useEffect(() => {
    return () => {
      second;
    };
  }, []);
 */
  const onChange = (input, value) => {
    setSearchData({ ...searchData, [input]: value });
  };

  const onChange1 = (input, value) => {
    setInternationalData({ ...internationalData, [input]: value });
  };

  const localSearchHandler = () => {
    dispatch(GetLocalSearch(user?.result.AccessToken, searchData));
  };
  const internationalSearchHandler = () => {
    dispatch(
      GetInternationalSearch(user?.result.AccessToken, internationalData)
    );
  };
  const [listAdded, setListAdded] = useState([]);
  const [listDeleted, setListDeleted] = useState([]);

  const handleDelete = (item) => {
    setListDeleted([...listDeleted, item]);
    setListAdded(
      listAdded?.filter((obj, index) => obj?._id !== item?._id && obj)
    );
  };

  const handleAdd = (item) => {
    setListAdded([...listAdded, item]);
  };
  console.log("hlloooo", listAdded[0]);

  const { listLocalSearch } = useSelector((state) => state.searchReducer);

  return (
    <div style={{ width: "100%", padding: 20 }}>
      {/* //////////////////////////////////////////////////////////////titre1 */}
      <div
        style={{
          alignContent: "space-between",
          display: "flex",
          marginBottom: 20,
        }}
      >
        <div>
          <img
            src={icon_add}
            alt="logo"
            style={{
              width: 80,
              height: 80,
              objectFit: " contain",
              marginRight: 20,
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

                color: "#2B29D4",
              }}
            >
              Add Search
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
              Enter personal information required for identification, fields
              marked * are compulsory
            </Typography>{" "}
          </div>{" "}
        </div>
      </div>

      <Divider
        variant="fullWidth"
        style={{
          marginBlock: 15,
        }}
      />
      {/* //////////////////////////////////////////////////////////////form1 */}
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
            Local search
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
            Enter local search informations
          </Typography>
        </div>{" "}
        <div
          style={{
            alignItems: "center",
            marginLeft: "70%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton
            type="submit"
            onClick={(searchData) => localSearchHandler(searchData)}
            style={{ backgroundColor: "primary.main" }}
            startIcon={<SearchIcon />}
          >
            Search
          </PrimaryButton>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center ",
          }}
        ></div>
      </div>
      <div>
        <Grid container spacing={0} style={gridContainer}>
          <Input
            style={gridItem}
            width="50px"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={searchData?.firstName}
            onChange={(event) => onChange("firstName", event.target.value)}
          />
          <Input
            style={gridItem}
            label="Last Name"
            autoComplete="given-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            value={searchData?.lastName}
            onChange={(event) => onChange("lastName", event.target.value)}
          />
          <Input
            style={gridItem}
            label="Cin"
            autoComplete="given-name"
            name="cin"
            required
            fullWidth
            id="cin"
            value={searchData?.cin}
            onChange={(event) => onChange("cin", event.target.value)}
          />
        </Grid>{" "}
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        {/*      {localSearch && <RechLocalAcc />} */}
        {listLocalSearch?.email ? (
          <RechLocalAcc />
        ) : listLocalSearch?.firstName ? (
          <AlertC />
        ) : (
          <div></div>
        )}
      </div>

      <Divider variant="fullWidth" style={{ marginBlock: 15 }} />
      {/*  //////////////////////////////////////////////////////////////form2    address*/}
      <div>
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
              International search
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
              Enter International search informations
            </Typography>
          </div>{" "}
          <div
            style={{
              alignItems: "center",
              marginLeft: "65.5%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <PrimaryButton
              type="submit"
              onClick={(internationalData) =>
                !internationalSearchIsLoading &&
                internationalSearchHandler(internationalData)
              }
              style={{
                backgroundColor: "primary.main",
                minWidth: 120,
              }}
              startIcon={!internationalSearchIsLoading && <SearchIcon />}
            >
              {internationalSearchIsLoading ? (
                <Dots color="white" size={14} />
              ) : (
                "Search"
              )}
            </PrimaryButton>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center ",
            }}
          ></div>
        </div>
        <div>
          <Grid container spacing={0} style={gridContainer}>
            <Input
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={internationalData?.firstName}
              onChange={(event) => onChange1("firstName", event.target.value)}
            />
            <Input
              label="Last Name"
              autoComplete="given-name"
              name="lastName"
              required
              fullWidth
              id="lastName"
              value={internationalData?.lastName}
              onChange={(event) => onChange1("lastName", event.target.value)}
            />{" "}
          </Grid>
        </div>
      </div>

      <div style={{ marginBlock: 20 }}>
        {listInternationalSearch.length > 0 && (
          <div style={{ marginBlock: 20 }}>
            <Divider
              variant="fullWidth"
              style={{
                marginBlock: 15,
              }}
            />
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                textAlign: "left",

                color: "#2B29D4",
              }}
            >
              Found correspondences
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
              Found correspondences for this person
            </Typography>
          </div>
        )}

        {listInternationalSearch.map((item, index) => (
          <ControlledAccordions
            item={item}
            handleDelete={(item) => handleDelete(item)}
            handleAdd={(item) => handleAdd(item)}
            listAdded={listAdded}
            listDeleted={listDeleted}
          />
        ))}
        <div>
          {listInternationalSearch?.length > 0 && (
            <AddUser listAdded={listAdded} />
          )}
        </div>
      </div>
      <Collapse in={showAlert}>
        <Stack
          sx={{ width: "30%", position: "absolute", right: 20, bottom: 20 }}
          spacing={2}
        >
          <Alert
            variant="filled"
            severity="success"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            This user is saved with success !
          </Alert>
        </Stack>
      </Collapse>
    </div>
  );
}
