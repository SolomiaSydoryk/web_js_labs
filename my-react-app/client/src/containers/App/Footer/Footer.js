import React from "react";
import { Wrapper, IconsWrapper, HorizontalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    FireOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
       <IconBase component={FireOutlined} color='#b3360c'/>
        <h1>Gimmi Shop</h1>
      </LogoWrapper>
      <p>Gamers Unleash the Power of Imagination <br />Exploring Worlds, Defeating Foes, and Crafting Your Legacy</p>
      <HorizontalLine />
      <IconsWrapper>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <IconBase component={YoutubeOutlined} color='#FF0000'/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <IconBase component={TwitterOutlined} color='#03A9F4' />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <IconBase component={FacebookOutlined} color='#007AB9'/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <IconBase component={InstagramOutlined} color='#a6234c'/>
          </a>
      </IconsWrapper>
      <HorizontalLine />
      <StyledText>© Gimmi Shop all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;