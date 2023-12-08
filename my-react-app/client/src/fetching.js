import axios from "axios";

const LOCALHOST = "http://localhost:8080";

export const getGameList = (filterCondition) => {
  return axios.get(LOCALHOST +"/api/game", {
    params: filterCondition,
  });
};

export const getDefaultGameList = () => {
  return axios.get(LOCALHOST +"/api/games");
};

export const getMoreGameInfo = (gameId) => {
  return axios.get(LOCALHOST +`/api/game/${gameId}`);
};
