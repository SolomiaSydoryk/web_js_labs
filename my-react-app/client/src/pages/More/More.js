import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayMore from "../../components/DisplayMore/DisplayMore";
import Loading from "../../containers/Loading/Loading";
import { getMoreGameInfo } from "../../fetching";

const MorePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMoreGameInfo(id)
      .then((response) => {
        setGame(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

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
