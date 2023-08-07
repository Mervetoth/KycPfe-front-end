import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Menu from "../../component/Menu";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    !user && !userStorage && navigate("/login");
  }, [user]);

  return (
    <Box sx={{ backgroundColor: "primary.backgroundc" }}>
      <div
        style={{
          width: "100wh",
          height: "100vh",
        }}
      >
        <Menu />
      </div>
    </Box>
  );
}

export default Dashboard;
