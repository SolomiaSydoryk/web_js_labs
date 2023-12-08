import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../App/Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Footer from "../App/Footer/Footer";
import MorePage from "../../pages/More/More";
import Cart from "../../pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <Layout />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/more/:id" element={<MorePage />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
