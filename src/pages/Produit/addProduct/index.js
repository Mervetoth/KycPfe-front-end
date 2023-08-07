import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/addproduct.png";

////////////////////:

import Input from "../../../component/input";

import { useDispatch, useSelector } from "react-redux";
import {
  AddListProduct,
  setAddProductSuccess,
} from "../../../store/actions/product";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";

////////////////
export default function AddProduct() {
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
  // on ajoute state ici

  /* const handleSubmit = (event) => {
    event.preventDefault();
    const productData = new FormData(event.currentTarget);
    console.log({
      prodName: productData.post("prodName"),
      risqueProd: productData.post("risqueProd"),
    });
  }; */
  const { user } = useSelector((state) => state.userReducer);
  const { addProductSuccess } = useSelector((state) => state.productReducer);

  const [productData, setProductData] = useState({
    prodName: "",
    risqueProd: "",
  });

  const onChange = (input, value) => {
    setProductData({ ...productData, [input]: value });
  };
  const addHandler = () => {
    dispatch(AddListProduct(productData, user?.result.AccessToken));
  };

  useEffect(() => {
    if (addProductSuccess) {
      dispatch(setAddProductSuccess(false));
      setShowAlert(true);
      setProductData({
        prodName: "",
        risqueProd: "",
      });
    }
  }, [addProductSuccess]);

  const [showAlert, setShowAlert] = useState(false);

  /*   useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]); */
  return (
    <div style={{ width: "100%", padding: 20 }}>
      {/* //////////////////////////////////////////////////////////////titre1 */}
      <div
        style={{
          alignContent: "space-between",
          display: "flex",
          marginBottom: 15,
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
              Add Product
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
              Enter the required information for identification, fields marked *
              are compulsory
            </Typography>{" "}
          </div>{" "}
        </div>
        <div
          style={{
            alignItems: "center",
            marginLeft: "38%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <PrimaryButton
            type="submit"
            onClick={(productData) => addHandler(productData)}
            style={{ backgroundColor: "primary.main" }}
          >
            Save
          </PrimaryButton>
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
            Product information
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
            Enter Product informations
          </Typography>
        </div>
      </div>
      <div>
        <Grid container spacing={0} style={gridContainer}>
          <Input
            style={gridItem}
            label="Product Name"
            autoComplete="given-name"
            name="prodName"
            required
            fullWidth
            id="prodName"
            value={productData?.prodName}
            onChange={(event) => onChange("prodName", event.target.value)}
          />{" "}
          <Input
            style={gridItem}
            width="50px"
            autoComplete="given-name"
            name="risqueProd"
            required
            fullWidth
            id="risqueProd"
            label="Product Risk"
            autoFocus
            value={productData?.risqueProd}
            onChange={(event) => onChange("risqueProd", event.target.value)}
          />
        </Grid>
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
            This product is saved with success !
          </Alert>
        </Stack>
      </Collapse>
    </div>
  );
}
