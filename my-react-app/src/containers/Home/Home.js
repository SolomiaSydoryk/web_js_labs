import React from "react";
import ImgModel0 from "../Icons/witcher.jpg";
import ImgModel1 from "../Icons/dbd.jpg";
import ImgModel2 from "../Icons/Unholy.jpg";
import ImgModel3 from "../Icons/Stalker.jpg";
import { SectionWrapper, StyledText, CardWrapper } from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const dataCard = [
  {
    title: "Dead by Daylight",
    text: "The game pits a team of one to four survivor players against a fifth killer player on a limited map.",
    image: ImgModel1,
    price: 50,
  },
  {
    title: "Unholy",
    text: "A first-person psychological horror game where players must open the doors between normal reality and a dark, unholy world to uncover the secret and save the heroine's child.",
    image: ImgModel2,
    price: 95,
  },
  {
    title: "S.T.A.L.K.E.R.",
    text: "The events take place in the Zone, an alternative version of the exclusion zone of the Chernobyl nuclear power plant.",
    image: ImgModel3,
    price: 77,
  },
];

const homeContent = {
  title: "Immerse Yourself in the Heart-Pounding World of Games",
  description: "Are you ready to step into the realm of fear and adrenaline?"+ 
  "This games offer a unique and spine-tingling experience like no other." +
  "From abandoned asylums to killers, these virtual nightmares will keep you on the edge of your seat." +
  "The chilling soundtracks and immersive graphics will make your heart race, creating an unforgettable gaming adventure." +
  "Whether you prefer to face off against supernatural creatures or navigate the perils of a post-apocalyptic world, " + 
  "horror games take you on a journey into the unknown. Get ready to be terrified and thrilled in equal measure."
}

const Home = () => {
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
        {dataCard.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default Home;
