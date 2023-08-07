import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import icon_add from "../../../assets/Icon_user-plus.png";
import { Typography } from "@mui/material";

export default function CorrespendenceList() {
  const handleEdit = (e) => {
    console.log(e);
    e.stopPropagation();
  };
  const handleDelete = (e) => {
    e.stopPropagation();
  };

  const columns = [
    { id: "id", label: "Id" },
    { id: "typeRech", label: "Type de Recherche", minWidth: 100 },
    {
      id: "firstName",
      label: "First name",
    },
    {
      id: "lastName",
      label: "Last name",
    },
    ,
    {
      id: "adminId",
      label: "Admin Id",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "listeCorr",
      label: "Correspendense list",
    },
    {
      id: "createdAt",
      label: "Created at",
    },
  ];
  const rows = [
    {
      id: "6234c483ebad4d46182d5a46",

      typeRech: "Individual",

      firstName: "Abu",

      lastName: "abbas ",

      adminId: "6228b158d7f961aae2a9décd",

      status: "1",

      listeCorr: ["6234c483ebadad4a6182d5a47"],
      createdAt: "22/30/1990",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <div
      sx={{
        display: "flex",

        width: "100%",
        overflow: "hidden",
      }}
    >
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
              width: 50,
              height: 50,
              objectFit: " contain",
              marginRight: 30,
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
              Detail search
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
              All search information .
            </Typography>{" "}
          </div>{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <Table
          sx={{
            border: "1px solid",
            backgroundColor: "primary.backgroundc",
            borderColor: "primary.borderc",
            borderRadius: 5,
            overflow: "hidden",
          }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead
            sx={{
              fontFamily: "Georgia",
              backgroundColor: "primary.backgroundc",
            }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    fontFamily: "Georgia",
                    backgroundColor: "primary.backgroundc",
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: "#525B94" }}
                >
                  {column.label}
                </TableCell>
              ))}{" "}
              <TableCell
                sx={{ backgroundColor: "primary.backgroundc" }}
                key={"action"}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{
                            borderBottomWidth:
                              index === rows.length - 1 ? 0 : 1,
                          }}
                          sx={{
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
                        borderBottomWidth: index === rows.length - 1 ? 0 : 1,
                      }}
                      sx={{ backgroundColor: "white" }}
                      key={"action"}
                    ></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>{" "}
      </div>
    </div>
  );
}
