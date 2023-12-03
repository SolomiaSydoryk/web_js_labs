import React, { useState, useEffect } from "react";
import { PriceSection, SectionWrapper, StyledImage, StyledDescSection, StyledType, StyledText, StyledButton, CustomLink } from "./DisplayMore.styled";
import dataCard from "../../components/CardData/CardData";

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
            <img src={dataCard[gameData.id - 1].image} alt="#" />
          </StyledImage>
          <StyledDescSection>
            <h2>{gameData.name}</h2>
            <StyledType>{gameData.type}</StyledType>
            <StyledText>{gameData.description}</StyledText>
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
