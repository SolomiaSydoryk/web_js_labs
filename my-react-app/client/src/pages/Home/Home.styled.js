import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  background-color: #b5623c;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  .main_photo {
    width: 51%;
  }
`;

export const StyledText = styled.div`
  padding-top: 20px;
  color: black;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  padding-left: 50px;

  h1 {
    font-size: 40px;
    color: black;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 60px;
`;
export const StyledButton = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 1px solid #c9490e;
  color: #c9490e;
  margin-top: 20px;
  width: 130px;
  height: 40px;
  font-size: 17px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #c9490e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
