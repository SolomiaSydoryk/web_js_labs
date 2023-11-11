import React from "react";
import { Dropdown, message, Space, Input } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { CardWrapper, HorizontalLine } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import ImgModel1 from "../../containers/Icons/dbd.jpg";
import ImgModel2 from "../../containers/Icons/Metro.jpg";
import ImgModel3 from "../../containers/Icons/Stalker.jpg";
import ImgModel4 from "../../containers/Icons/Unholy.jpg";
import ImgModel5 from "../../containers/Icons/Witcher.jpg";
import ImgModel6 from "../../containers/Icons/Shadowgun_Legends.jpg";
const { Search } = Input;

const handleButtonClick = (e) => {
  message.info("Here you can choose the sorting method.");
  console.log("click left button", e);
};

const handleMenuClick = (e) => {
  message.info("Soon.");
  console.log("click", e);
};

const items = [
  {
    label: "Sort by name",
    key: "1",
  },
  {
    label: "Sort by increasing price",
    key: "2",
  },
  {
    label: "Sort by decreasing price",
    key: "3",
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const arrowIcon = <DownOutlined />;
const searchIcon = <SearchOutlined />;

const dataCard = [
  {
    title: "Dead by Daylight",
    type: "Mobile/Computer Game",
    text:
      "A 4 vs 1 multiplayer horror game where one player takes on the role of the brutal Killer" +
      " while the other four players are Survivors trying to escape the killer.",
    image: ImgModel1,
    price: 50,
  },
  {
    title: "Metro 2033",
    type: "Video Game",
    text:
      "A video game that combines the genres of survival horror and first-person shooter. " +
      'The plot of the game is based on the novel of the same name "Metro 2033" by the Russian writer Dmitry Hlukhovsky.',
    image: ImgModel2,
    price: 95,
  },
  {
    title: "S.T.A.L.K.E.R. 2",
    type: "Video Game",
    text:
      "A role-playing video game in the genre of a post-apocalyptic first-person shooter with elements of survival horror " +
      "and immersive sim, developed and published by the Ukrainian company GSC Game World.",
    image: ImgModel3,
    price: 77,
  },

  {
    title: "Unholy",
    type: "Video Game",
    text:
      "A first-person psychological horror where players must open the door between ordinary reality and a dark, godless world " +
      "to discover a secret and save the heroine's child. Explore both worlds in search of clues, solve puzzles and choose " +
      "to hide from brutal enemies or fight them and confront the nightmarish power.",
    image: ImgModel4,
    price: 80,
  },

  {
    title: "The Witcher: Old World",
    type: "Board Game",
    text:
      "In a dangerous, unpredictable world, the habit of not being surprised by anything and drawing your sword in time is a very useful skill. " +
      "Try to keep your mind cool when someone's hungry eyes are watching you from the darkness, it's good if it's a bear, " +
      "but it's quite possible that it's some endriaga, or even a completely otherworldly undead.",
    image: ImgModel5,
    price: 36,
  },

  {
    title: "Shadowgun Legends",
    type: "Mobile Game",
    text:
      "The action of the game takes place in 2350, intergalactic corporations exist not under the control of governments. " +
      "Bounty hunters and mercenaries work for both corporations and planetary governments, working for a higher fee. " +
      "The best mercenaries are known under the pseudonym Shadowgun.",
    image: ImgModel6,
    price: 10,
  },
];

const Catalog = () => {
  return (
    <div>
      <HorizontalLine />
      <Space wrap style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Dropdown.Button
          menu={menuProps}
          onClick={handleButtonClick}
          icon={arrowIcon}
        >
          Sort games
        </Dropdown.Button>
        <Search
          placeholder="Input name of the game"
          allowClear
          enterButton={searchIcon}
          size="large"
        />
      </Space>
      <HorizontalLine />
      <CardWrapper>
        {dataCard.map(({ title, type, text, image, price }, idx) => (
          <CardItem
            title={title}
            type={type}
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

export default Catalog;
