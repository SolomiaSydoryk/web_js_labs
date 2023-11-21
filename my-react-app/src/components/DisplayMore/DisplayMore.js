import React, { useState, useEffect } from "react";
import {
  PriceSection,
  SectionWrapper,
  StyledImage,
  StyledDescSection,
  StyledType,
  StyledText,
  StyledButton,
  CustomLink,
} from "./DisplayMore.styled";

const DisplayMore = ({ game }) => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    setGameData(game);
  }, [game]);

  return (
    <SectionWrapper>
      {gameData && (
        <>
          <StyledImage>
            <img src={gameData.image} alt="#" />
          </StyledImage>
          <StyledDescSection>
            <h2>{gameData.title}</h2>
            <StyledType>{gameData.type}</StyledType>
            <StyledText>{gameData.text}</StyledText>
            <PriceSection>
              <h5 style={{ marginRight: "20px" }}>Price:</h5>${gameData.price}
              <CustomLink exact to="/catalog" activeClassName="selected">
                <StyledButton>GO BACK</StyledButton>
              </CustomLink>
            </PriceSection>
          </StyledDescSection>
        </>
      )}
    </SectionWrapper>
  );
};

export default DisplayMore;
