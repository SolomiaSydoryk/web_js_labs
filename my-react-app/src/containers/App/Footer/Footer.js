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
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={FacebookOutlined} color='#007AB9'/>
          <IconBase component={InstagramOutlined} color='#a6234c'/>
      </IconsWrapper>
      <HorizontalLine />
      <StyledText>© Gimmi Shop all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;