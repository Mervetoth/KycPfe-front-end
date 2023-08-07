import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Trash from "../../../assets/Icon_trash-2.png";
import Edit from "../../../assets/Icon_edit.png";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../../component/Modal";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import PrimaryButton from "../../../component/button";
import { useDispatch, useSelector } from "react-redux";
import {
  GetListProduct,
  DeleteListProduct,
} from "../../../store/actions/product";
const columns = [{ id: "prodName", label: "Product name", minWidth: 100 }];

export default function StickyHeadTable() {
  const handleEdit = (e, item) => {
    console.log(e);
    e.stopPropagation();
    navigate(`/EditProduct?id=${item?.id}`);
  };
  const handleDelete = (e) => {
    dispatch(DeleteListProduct(user?.result.AccessToken, selectedItem?.id));
  };

  /////////modal/////
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e, item) => {
    setOpen(true);
    setSelectedItem(item);
    e.stopPropagation();
  };
  const handleClose = () => {
    setOpen(false);
  };
  ////////fin modal/////

  const rows = [
    {
      id: "001",
      prodName: "ProductfN",
    },
    {
      id: "001",
      prodName: "ProductfN",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const { listProduct, count, currentPage } = useSelector(
    (state) => state.productReducer
  );
  const { user } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    console.log(listProduct);
    dispatch(GetListProduct(user?.result.AccessToken, page, rowsPerPage));
  }, [user, rowsPerPage, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    setOpen(false);
  }, [listProduct]);

  return (
    <div
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
      style={{
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
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
            sx={{
              color: "primary.titleC",
            }}
          >
            Product list
          </Typography>
          <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
            }}
            sx={{
              color: "primary.textC",
            }}
          >
            Some informations about Products , click on the row to view all
            details .
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center ",
          }}
        >
          <PrimaryButton
            style={{}}
            onClick={() => navigate("/AddProduct")}
            startIcon={<AddRoundedIcon />}
          >
            Add Product
          </PrimaryButton>
        </div>
      </div>

      <Table
        sx={{
          maxHeight: 440,
          border: "1px solid",
          borderColor: "primary.borderc",
          borderRadius: 5,
          overflow: "hidden",
        }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow style={{}}>
            {columns.map((column) => (
              <TableCell
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  fontFamily: "Georgia",
                  backgroundColor: "primary.listC",
                }}
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, color: "#525B94" }}
              >
                {column.label}
              </TableCell>
            ))}{" "}
            <TableCell
              sx={{ backgroundColor: "primary.listC" }}
              key={"action"}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listProduct.map((row, index) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
                onClick={(event) => handleEdit(event, row)}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      style={{
                        borderBottomWidth: 1,
                      }}
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontFamily: "Georgia",
                        backgroundColor: "white",
                      }}
                      key={column.id}
                      align={column.align}
                    >
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
                <TableCell
                  style={{
                    borderBottomWidth: 1,
                  }}
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    backgroundColor: "white",
                  }}
                  key={"action"}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#FFF2D4",
                      }}
                      onClick={(event) => handleEdit(event, row)}
                      /*  onClick={(event) => getIdHandler(event, row)} */
                    >
                      <img
                        src={Edit}
                        alt="logo"
                        style={{
                          width: 10,
                          height: 10,
                          objectFit: " contain",
                        }}
                      />{" "}
                    </IconButton>
                    <IconButton
                      onClick={(event) => handleOpen(event, row)}
                      style={{
                        marginLeft: 15,
                        borderRadius: "25%",
                        backgroundColor: "#FFE8EF",
                      }}
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
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1, 5, 10]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: "primary.textC",
        }}
      />
      <CustomModal
        title={`are you sure to delete this product: ${selectedItem?.id} ?`}
        open={open}
        setOpen={(value) => setOpen(value)}
        onClick={() => handleDelete(selectedItem?.prodName)}
      />
    </div>
  );
}
