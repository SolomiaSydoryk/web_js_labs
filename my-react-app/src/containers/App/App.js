import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Footer from "./Footer/Footer";
import MorePage from "../../pages/More/More";

const App = () => {
  return (
    <div>
      <Layout />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/more/:id" element={<MorePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
