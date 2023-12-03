import axios from "axios";

export const getGameList = (filterCondition) => {
  return axios.get("http://localhost:8080/api/game", {
    params: filterCondition,
  });
};

export const getDefaultGameList = () => {
  return axios.get("http://localhost:8080/api/games");
};

export const getMoreGameInfo = (gameId) => {
  return axios.get(`http://localhost:8080/api/game/${gameId}`);
};
