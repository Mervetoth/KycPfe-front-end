import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Trash from "../../../assets/Icon_trash-2.png";
import Edit from "../../../assets/Icon_edit.png";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";
import CustomModal from "../../../component/Modal";
import PrimaryButton from "../../../component/button";
import { useDispatch, useSelector } from "react-redux";
import { GetListSearch, DeleteListSearch } from "../../../store/actions/search";
import DetailRech from "../detailSearch";
import moment from "moment";
const columns = [
  { id: "firstName", label: "First name", minWidth: 100 },
  {
    id: "lastName",
    label: "Last name",
  },
  {
    id: "createdAt",
    label: "Date",
  },
];

export default function StickyHeadTable() {
  const handleDelete = (id) => {
    dispatch(DeleteListSearch(user?.result.AccessToken, selectedItem?.id));
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

  ////////fin modal/////

  /*   const rows = [
    {
      id: "001",
      firstName: "SearchfN",
      lastName: "SearchlN",
      createdAt: "SearchlN",
    },
    {
      id: "001",
      firstName: "SearchfN",
      lastName: "SearchlN",
      createdAt: "SearchlN",
    },
  ]; */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [selectedItem, setSelectedItem] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const { user } = useSelector((state) => state.userReducer);
  const { listSearch, count, currentPage } = useSelector(
    (state) => state.searchReducer
  );

  React.useEffect(() => {
    console.log(listSearch);
    dispatch(GetListSearch(user?.result.AccessToken, page, rowsPerPage));
  }, [user, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setOpen(false);
  }, [listSearch]);

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
            Search history
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
            {" "}
            Some informations about search histories, click on the row to view
            all details .
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
            startIcon={<SearchIcon />}
          >
            Search
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
          {listSearch.map((row, index) => {
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
                        : moment(value)?.format("LL") !== "Invalid date"
                        ? moment(value)?.format("LL")
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
        title={`are you sure to delete this Search: ${
          selectedItem?.firstName + " " + selectedItem?.lastName
        } ?`}
        open={open}
        setOpen={(value) => setOpen(value)}
        onClick={() => handleDelete(`${selectedItem?.id}`)}
      />{" "}
      <DetailRech open={open1} setOpen={(value) => setOpen1(value)} />
    </div>
  );
}
