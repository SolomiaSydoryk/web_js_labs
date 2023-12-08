import { useSelector } from "react-redux";
import {
  ImageStyled,
  Content,
  CountButton,
  HorizontalLine,
  PriceSection,
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action";
import { useState, useEffect } from "react";
import { Button } from "antd";
import dataCard from "../../components/CardData/CardData";

const Cart = () => {
  const gameArray = useSelector((state) => state.gameList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    gameArray.forEach((game) => {
      totalPrice += Math.round(game.price) * game.count;
    });
    setTotalPrice(totalPrice);
  }, [gameArray]);
  const dispatch = useDispatch();

  const handleIncrement = (name) => {
    dispatch(incrementCount(name));
  };

  const handleDecrement = (name) => {
    dispatch(decrementCount(name));
  };

  const filteredGames = gameArray.filter((game) => game.count > 0);

  return (
    <div>
      <HorizontalLine />
      {filteredGames.map((game, index) => (
        <div key={index}>
          <Content>
            <NavLink
              exact="true"
              to={`/more/${game.id}`}
              onClick={(e) => {
                if (e.target.tagName === "BUTTON") {
                  e.preventDefault();
                }
              }}
            >
              <ImageStyled src={dataCard[game.id - 1].image} />
            </NavLink>
            <h3>{game.name}</h3>
            <CountButton>
              <Button onClick={() => handleDecrement(game.name)}>-</Button>
              <p>{game.count}</p>
              <Button onClick={() => handleIncrement(game.name)}>+</Button>
            </CountButton>
            <h3>${game.price}</h3>
            <HorizontalLine style={{ marginTop: "30px" }} />
          </Content>
        </div>
      ))}
      <PriceSection>
        {totalPrice > 0 && <h2>Total Price: ${totalPrice}</h2>}
        <Button size={"large"}>
          <NavLink to="/Catalog">BACK TO CATALOG</NavLink>
        </Button>
        {totalPrice > 0 && <Button size={"large"}>BUY ONLINE</Button>}
      </PriceSection>
      <HorizontalLine />
    </div>
  );
};

export default Cart;
