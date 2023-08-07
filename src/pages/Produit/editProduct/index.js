import { Divider, Grid, Table, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../component/button";
import icon_add from "../../../assets/Icon_user-plus.png";
import PhoneInput from "react-phone-input-2";
import { useSearchParams } from "react-router-dom";

////////////////////:

import Input from "../../../component/input";
import PasswordInput from "../../../component/passwordInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetByIdListProduct,
  setEditProductSuccess,
  UpdateListProduct,
} from "../../../store/actions/product";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
////////////////
export default function EditProduct() {
  const navigate = useNavigate();
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

  const [productData, setProductData] = useState();
  const { getNewListProduct, editProductSucces } = useSelector(
    (state) => state.productReducer
  );
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(
      GetByIdListProduct(
        {
          id: searchParams.get("id"),
        },
        user?.result.AccessToken
      )
    );
  }, []);

  useEffect(() => {
    if (editProductSucces) {
      dispatch(setEditProductSuccess(false));
      setShowAlert(true);
    }
  }, [editProductSucces]);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setProductData(getNewListProduct);
  }, [getNewListProduct]);

  const onChange = (input, value) => {
    setProductData({ ...productData, [input]: value });
  };

  const getIdHandler = () => {
    dispatch(GetByIdListProduct(productData, user?.result.AccessToken));
  };

  const updateHandler = () => {
    dispatch(
      UpdateListProduct(user?.result.AccessToken, productData.id, productData)
    );
  };

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
              Update Product
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
              Consult and update Product's informations .
            </Typography>{" "}
          </div>{" "}
        </div>
        <div
          style={{
            alignItems: "center",
            marginLeft: "55%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PrimaryButton
            type="submit"
            onClick={(productData) => updateHandler(productData)}
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
            name="prodName"
            required
            fullWidth
            id="prodName"
            label="Product Name"
            autoFocus
            value={productData?.prodName}
            onChange={(event) => onChange("prodName", event.target.value)}
          />
          <Input
            style={gridItem}
            label="Product Risk"
            autoComplete="given-name"
            name="risqueProd"
            required
            fullWidth
            id="risqueProd"
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
