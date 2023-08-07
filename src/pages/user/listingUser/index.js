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
import { DeleteListUser, GetListUser } from "../../../store/actions/user";
import DetailUserC from "../../../component/DetailUserC";

const columns = [
  { id: "firstName", label: "First name", minWidth: 100 },
  {
    id: "lastName",
    label: "Last name",

    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "email", label: "Email" },
  {
    id: "action",
  },
];

export default function StickyHeadTable() {
  const handleDelete = (id) => {
    dispatch(DeleteListUser(user?.result.AccessToken, selectedItem?.id));
  };

  /////////modal/////
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e, item) => {
    setOpen(true);
    setSelectedItem(item);
    e.stopPropagation();
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = (e, item) => {
    setOpen1(true);
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
      firstName: "UserlN",
      lastName: "UserlN",
    },
    {
      id: "001",
      firstName: "UserfN",
      lastName: "UserlN",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [selectedItem, setSelectedItem] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const { listUser, user, count, currentPage } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    console.log(listUser);
    user && dispatch(GetListUser(user?.result.AccessToken, page, rowsPerPage));
  }, [user, rowsPerPage, page]);

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  useEffect(() => {
    setOpen(false);
  }, [listUser]);

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
            Client list
          </Typography>
          <Typography
            variant="p"
            gutterBottom
            component="div"
            sx={{
              color: "primary.textC",
            }}
            style={{
              textAlign: "left",
            }}
          >
            Some informations about Users , click on the row to view all details
            .
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
            onClick={() => navigate("/AddSearch")}
            startIcon={<AddRoundedIcon />}
          >
            Add search
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
                  fontColor: "red",
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
          {listUser.map((row, index) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
                onClick={(event) => handleOpen1(event, row)}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      sx={{
                        fontFamily: "Georgia",
                        backgroundColor: "primary.rowsC",
                      }}
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100px",
                        borderBottomWidth: 1,
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
                    backgroundColor: "primary.rowsC",
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
                      onClick={(event) => handleOpen(event, row)}
                      style={{
                        marginLeft: 15,
                        borderRadius: "25%",
                        backgroundColor: "#CB9F99",
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
        color="primary.titleC"
        sx={{
          color: "primary.titleC",
        }}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <CustomModal
        title={`are you sure to delete this Client: ${selectedItem?.firstName} ?`}
        open={open}
        setOpen={(value) => setOpen(value)}
        onClick={() => handleDelete(`${selectedItem?.id}`)}
      />{" "}
      <DetailUserC
        open={open1}
        setOpen={(value) => setOpen1(value)}
        item={selectedItem}
      />
    </div>
  );
}
