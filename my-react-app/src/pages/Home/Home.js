import React, { useState } from "react";
import ImgModel0 from "../../containers/Icons/Witcher.jpg";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  ButtonWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import dataCard from "../../components/CardData/CardData";

const homeContent = {
  title: "Immerse Yourself in the Heart-Pounding World of Games",
  description:
    "Are you ready to step into the realm of fear and adrenaline? " +
    "This games offer a unique and spine-tingling experience like no other. " +
    "From abandoned asylums to killers, these virtual nightmares will keep you on the edge of your seat. " +
    "The chilling soundtracks and immersive graphics will make your heart race, creating an unforgettable gaming adventure. " +
    "Whether you prefer to face off against supernatural creatures or navigate the perils of a post-apocalyptic world, " +
    "horror games take you on a journey into the unknown. Get ready to be terrified and thrilled in equal measure. ",
};

const Home = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const initialCards = dataCard.slice(0, 3);
  const additionalCards = dataCard.slice(3);
  const buttonText = showAllCards ? "Hide" : "View more";

  const handleClick = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <SectionWrapper>
        <img src={ImgModel0} alt="#" className="main_photo" />
        <StyledText>
          <h1>{homeContent.title}</h1>
          <p>{homeContent.description}</p>
        </StyledText>
      </SectionWrapper>
      <CardWrapper>
        {initialCards.map((item) => (
          <CardItem
            id={item.id}
            title={item.title}
            type={item.type}
            text={item.text}
            imageSrc={item.image}
            price={item.price}
          />
        ))}
      </CardWrapper>
      {showAllCards && (
        <CardWrapper>
          {additionalCards.map((item) => (
            <CardItem
              id={item.id}
              title={item.title}
              type={item.type}
              text={item.text}
              imageSrc={item.image}
              price={item.price}
            />
          ))}
        </CardWrapper>
      )}
      <ButtonWrapper>
        <StyledButton size="large" onClick={() => handleClick()}>
          {buttonText}
        </StyledButton>
      </ButtonWrapper>
    </div>
  );
};

export default Home;
