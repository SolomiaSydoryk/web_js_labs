import React from "react";
import {
  PriceSection,
  SectionWrapper,
  StyledImage,
  StyledDescSection,
  StyledType,
  StyledText,
} from "./DisplayMore.styled";

const DisplayMore = (props) => {
  const { game } = props;
  return (
    <SectionWrapper>
      <StyledImage>
        <img src={game.image} alt="#" />
      </StyledImage>
      <StyledDescSection>
        <h2>{game.title}</h2>
        <StyledType>{game.type}</StyledType>
        <StyledText>{game.text}</StyledText>
        <PriceSection>
          <h5 style={{ marginRight: "20px" }}>Price:</h5>${game.price}
        </PriceSection>
      </StyledDescSection>
    </SectionWrapper>
  );
};

export default DisplayMore;
