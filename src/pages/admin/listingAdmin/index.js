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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { GetlistAdmin, DeleteListAdmin } from "../../../store/actions/user";

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
  const handleEdit = (e, item) => {
    console.log(e);
    e.stopPropagation();
    navigate(`/EditAdmin?id=${item?.id}`);
  };
  const handleDelete = (id) => {
    dispatch(DeleteListAdmin(user?.result.AccessToken, selectedItem?.id));
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
      firstName: "AdminfN",
      lastName: "AdminlN",
    },
    {
      id: "001",
      firstName: "AdminfN",
      lastName: "AdminlN",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);

  const [selectedItem, setSelectedItem] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const { listAdmin, user, count, currentPage } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    console.log(listAdmin);
    dispatch(GetlistAdmin(user?.result.AccessToken, page, rowsPerPage));
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
  }, [listAdmin]);

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
            Admin list
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
            Some informations about Admins , click on the row to view all
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
            onClick={() => navigate("/AddAdmin")}
            startIcon={<AddRoundedIcon />}
          >
            Add admin
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
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                backgroundColor: "primary.listC",
              }}
              key={"action"}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listAdmin.map((row, index) => {
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
                        backgroundColor: "primary.rowsC",
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
                      style={{
                        borderRadius: "25%",
                        backgroundColor: "#FFF2D4",
                      }}
                      onClick={handleEdit}
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
        sx={{
          color: "primary.textC",
        }}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <CustomModal
        title={`are you sure to delete this Admin : ${selectedItem?.id} ?`}
        open={open}
        setOpen={(value) => setOpen(value)}
        onClick={() => handleDelete(`${selectedItem?.id}`)}
      />
    </div>
  );
}
