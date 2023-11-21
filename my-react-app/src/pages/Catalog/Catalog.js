import React, { useState } from "react";
import { Dropdown, message, Space, Input } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { CardWrapper, HorizontalLine } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import dataCard from "../../components/CardData/CardData";

const { Search } = Input;


const items = [
  {
    label: "Sort by name",
    key: "1",
  },
  {
    label: "Sort by type",
    key: "2",
  },
  {
    label: "Sort by decreasing price",
    key: "3",
  },
];


const arrowIcon = <DownOutlined />;
const searchIcon = <SearchOutlined />;

const Catalog = () => {
  const [searchGame, setSearchGame] = useState('');
  const [sortGame, setSortGame] = useState('');

  const handleButtonClick = (e) => {
    message.info("Here you can choose the sorting method.");
  };

  const handleMenuClick = (element) => {
    setSortGame(element.key);
  };

  const menuProps = {
  items,
  onClick: handleMenuClick,
  };

  const handleSearch = (newSearchItem) => {
    setSearchGame(newSearchItem);
  }

  const sortData = (data, sortType) => {
    let sortedData = [...data];

    switch (sortType) {
        case '1':
            sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case '2':
            sortedData = sortedData.sort((a, b) => a.type.localeCompare(b.type));
            break;
        case '3':
            sortedData = sortedData.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }

    return sortedData.filter(item => item.title.toLowerCase().includes(searchGame.toLowerCase()));
};

const sortedGames = sortData(dataCard, sortGame);

const filteredGames = sortedGames.filter(item => item.title.toLowerCase().includes(searchGame.toLowerCase()));

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
          onSearch={handleSearch}
        />
      </Space>
      <HorizontalLine />
      <CardWrapper>
      {filteredGames.length === 0 ? (
                    <StyledError>
                        <h1>No games found.</h1>
                    </StyledError>
                ) : (
                  filteredGames.map((item) => (
          <CardItem
            id={item.id}
            title={item.title}
            type={item.type}
            text={item.text}
            imageSrc={item.image}
            price={item.price}
          />
        ))
      )}
      </CardWrapper>
    </div>
  );
};

export default Catalog;
