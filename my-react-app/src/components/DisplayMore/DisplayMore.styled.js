import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 500px;
`;

export const StyledImage = styled.div`
  width: 650px;
  height: 650px;
  display: flex;
  flex-direction: column;
  img {
    border-radius: 20px;
  }
`;

export const StyledDescSection = styled.div`
  margin: 0 60px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 0px;
  }
`;
export const StyledType = styled.div`
  font-size: 20px;
  text-align: left;
  color: #4f4f4f;
`;

export const StyledText = styled.div`
  font-size: 18px;
  text-align: left;
  width: 500px;
  display: flex;
  color: #4f4f4f;
  margin-top: 10px;
`;

export const PriceSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;
export const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #c9490e;
  color: #c9490e;
  width: 150px;
  height: 35px;
  font-size: 18px;
  text-decoration: none;
  margin-left: 140px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #c9490e;
  }
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
`;
