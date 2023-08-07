import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <h1>Home page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <li>
          <ul>
            {" "}
            <Link to="/Login">Login</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/UpdatePerson">UpdatePerson</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/RechercheKyc">RechercheKyc</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/ListeProduit">ListeProduit</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/DetailProduct">DetailProduit</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/ListingAdmin">ListingAdmin</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/AjoutPerson">AjoutPerson</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/ListePays">ListePays</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/DetailCountry">DetailPays</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/DetailUser">DetailUser</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/DeletePerson">DeletePerson</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/Dashboard">Dashboard</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/Register">Register</Link>
          </ul>
          <ul>
            {" "}
            <Link to="/ListeCorrespondances">ListeCorrespondances</Link>
          </ul>
        </li>
      </nav>
    </div>
  );
}

export default Home;
