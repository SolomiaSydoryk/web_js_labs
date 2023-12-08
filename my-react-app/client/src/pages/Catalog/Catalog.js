import React, { useState, useEffect, useCallback } from "react";
import { Dropdown, message, Space, Input } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { CardWrapper, HorizontalLine } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import dataCard from "../../components/CardData/CardData";
import Loading from "../../containers/Loading/Loading";
import { getGameList } from "../../fetching";

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
  const [searchGame, setSearchGame] = useState("");
  const [sortGame, setSortGame] = useState("");
  const [loading, setLoading] = useState(true);
  const [gameData, setGameData] = useState([]);
  const [filter, setFilter] = useState({
    sortGame: "",
    searchGame: "",
  });

  const handleButtonClick = (e) => {
    message.info("Here you can choose the sorting method.");
  };

  const handleMenuClick = (element) => {
    const selectedSort = element.key;
    setSortGame(selectedSort);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  useEffect(() => {
    setLoading(true);
    getGameList(filter)
      .then((response) => {
        setGameData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [filter]);

  const applyFilter = useCallback(() => {
    setFilter(() => ({
      sortGame,
      searchGame,
    }));
  }, [sortGame, searchGame]);

  useEffect(() => {
    if (sortGame !== "") {
      applyFilter();
    }
  }, [sortGame, applyFilter]);

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
          onChange={(e) => setSearchGame(e.target.value)}
          onSearch={applyFilter}
        />
      </Space>
      <HorizontalLine />
      {loading ? (
        <Loading />
      ) : (
        <CardWrapper>
          {gameData.length === 0 ? (
            <h1>No games found</h1>
          ) : (
            gameData.map((item) => (
              <CardItem
                id={item.id}
                title={item.name}
                type={item.type}
                text={item.description}
                imageSrc={dataCard[item.id - 1].image}
                price={item.price}
                style={{ height: "650px" }}
              />
            ))
          )}
        </CardWrapper>
      )}
    </div>
  );
};

export default Catalog;
