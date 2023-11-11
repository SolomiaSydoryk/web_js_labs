import React from "react";
import { NavLink } from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styled";

const Navigation = () => (
  <LinkingWrapper>
    <div className="nav">
      <div className="nav-element">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-element">
        <NavLink exact to="/catalog">
          Catalog
        </NavLink>
      </div>
      <div className="nav-element">
        <NavLink exact to="/contacts">
          Contacts
        </NavLink>
      </div>
    </div>
  </LinkingWrapper>
);

export default Navigation;
