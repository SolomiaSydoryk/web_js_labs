import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Layout />
      <Navigation />
      <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/catalog" element ={<Catalog/>} />
            <Route path="/contacts" element ={<div>It`s contacts page</div>} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;