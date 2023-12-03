import React, { useState, useEffect } from "react";
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

import { getDefaultGameList } from "../../fetching";
import Loading from "../../containers/Loading/Loading";

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

  const [gameData, setGameData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDefaultGameList()
      .then((response) => {
        setGameData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
        setLoading(false);
      });
  }, []);

  const viewMoreButton = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    setShowAllCards(true);
  };

  const hideButton = () => {
    setVisibleItems(3);
    setShowAllCards(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardWrapper>
            {gameData.slice(0, visibleItems).map((item) => (
              <CardItem
                id={item.id}
                title={item.name}
                type={item.type}
                text={item.description}
                imageSrc={dataCard[item.id-1].image}
                price={item.price}
              />
            ))}
          </CardWrapper>
          <ButtonWrapper>
            {showAllCards ? (
              <StyledButton onClick={hideButton}>Hide</StyledButton>
            ) : (
              <StyledButton onClick={viewMoreButton}>View more</StyledButton>
            )}
          </ButtonWrapper>
        </>
      )}
    </div>
  );
};

export default Home;
