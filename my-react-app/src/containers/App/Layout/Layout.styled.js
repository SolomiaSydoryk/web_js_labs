import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  table-layout: fixed;
  border-spacing: 10px;
  > div {
    display: flex;
  }
  p {
    font-size: 20px;
  }
  span {
    font-size: 24px;
    margin-right: 10px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  > a {
    margin: 0 7px;
    color: #000000;
  }
`;
