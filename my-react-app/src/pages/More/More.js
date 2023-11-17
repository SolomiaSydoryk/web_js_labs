import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataCard from "../../components/CardData/CardData";
import DisplayMore from "../../components/DisplayMore/DisplayMore";

const MorePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const selectedGame = dataCard.find((item) => item.id === Number(id));
    setGame(selectedGame);
  }, [id]);

  if (!game) {
    return <div>Not Found </div>;
  }

  return (
    <div>
      <DisplayMore game={game} />
    </div>
  );
};

export default MorePage;
