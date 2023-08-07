import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./page/Login";
import SignUp from "./page/register";
import ListProduct from "./page/listProduct";
import DetailsProduct from "./page/detailsProduct";
import Dashboard from "./page/dashboard";
import DetailsCategories from "./page/detailsCategories";
import DetailsGuarantees from "./page/detailsGuarantees";
import DetailsRules from "./page/detailsRules";
import DetailsQuote from "./page/detailsQuote";
import ListeCategories from "./page/listeCategories";
import ListeGuaratees from "./page/listGuarantees";
import ListeQuote from "./page/listeQuote";
import ListeRules from "./page/listeRules";
import ListeUsers from "./page/listeUsers";
import ListeAdmin from "./page/listeAdmin";
import DetailsAdmin from "./page/detailsAdmin";
import DetailsUsers from "./page/detailsUsers";

function App() {
  return (
    <div className="App">
      <p>test</p>
      <ul>
        {" "}
        <li>
          {" "}
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          {" "}
          <Link to="/Login">login</Link>
        </li>
        <li>
          {" "}
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="/Dashboard/ListProduct" element={<ListProduct />} />
          <Route
            path="/Dashboard/DetailsProduct"
            element={<DetailsProduct />}
          />
          <Route
            path="/Dashboard/ListeCategories"
            element={<ListeCategories />}
          />
          <Route
            path="/Dashboard/ListeGuaratees"
            element={<ListeGuaratees />}
          />
          <Route path="/Dashboard/ListeQuote" element={<ListeQuote />} />
          <Route path="/Dashboard/ListeRules" element={<ListeRules />} />
          <Route
            path="/Dashboard/DetailsCategories"
            element={<DetailsCategories />}
          />
          <Route
            path="/Dashboard/DetailsGuarantees"
            element={<DetailsGuarantees />}
          />
          <Route path="/Dashboard/DetailsRules" element={<DetailsRules />} />
          <Route path="/Dashboard/DetailsQuote" element={<DetailsQuote />} />
          <Route path="/Dashboard/ListeUsers" element={<ListeUsers />} />
          <Route path="/Dashboard/ListeAdmin" element={<ListeAdmin />} />
          <Route path="/Dashboard/detailsAdmin" element={<DetailsAdmin />} />
          <Route path="/Dashboard/DetailsUsers" element={<DetailsUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
