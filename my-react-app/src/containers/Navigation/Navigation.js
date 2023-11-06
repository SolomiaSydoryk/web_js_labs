import React from "react";
import { NavLink } from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";

const Navigation = () => (
  <LinkingWrapper>
    <div className="nav">
      <div className="nav-element">
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </div>
      <div className="nav-element">
        <NavLink exact to="/catalog" activeClassName="selected">
          Catalog
        </NavLink>
      </div>
      <div className="nav-element">
        <NavLink exact to="/contact" activeClassName="selected">
          Contact
        </NavLink>
      </div>
    </div>
  </LinkingWrapper>
);

export default Navigation;
