import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styled";
import {
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
  FireOutlined,
} from "@ant-design/icons";

const Layout = () => (
  <StyledHeader title="Gimmi Shop">
    <div>
      <IconsWrapper>
        <FireOutlined className="fire-icon" />
      </IconsWrapper>
      <p>Gimmi Shop</p>
    </div>
    <div>
      <IconsWrapper>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </a>
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
        <SearchOutlined />

        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;
