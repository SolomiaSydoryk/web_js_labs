import React from "react";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Layout />
      <Navigation />
      <Home/>
      <Footer />
    </div>
  );
};

export default App;