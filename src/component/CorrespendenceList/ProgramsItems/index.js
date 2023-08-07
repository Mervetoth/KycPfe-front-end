import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export default function ProgramItems(props) {
  const { program } = props;
  const handleEdit = (e) => {
    console.log(e);
    e.stopPropagation();
  };
  const handleDelete = (e) => {
    e.stopPropagation();
  };

  const columns = [{ id: "programs", label: "Programs" }];
  const rows = [
    {
      programs: program,
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <div
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",

          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "20%",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: "#404875",
            }}
          >
            Programs
          </Typography>

          <Typography
            variant="caption"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",
              color: " #56619E",
            }}
          >
            Les alias de ce personne .
          </Typography>
        </div>{" "}
        <Table
          sx={{
            maxHeight: 440,
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
            <TableRow style={{}}>
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
