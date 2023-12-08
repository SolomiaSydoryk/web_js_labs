const defaultState = {
  gameList: [],
};

const findIndexByName = (arr, name) => {
  return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_GAME":
      const foundIndex = findIndexByName(state.gameList, action.payLoad.name);
      if (foundIndex === -1) {
        return { ...state, gameList: [...state.gameList, action.payLoad] };
      } else {
        const updatedGameArray = [...state.gameList];
        updatedGameArray[foundIndex] = {
          ...updatedGameArray[foundIndex],
          count: updatedGameArray[foundIndex].count + action.payLoad.count,
        };
        console.log(state.gameList[foundIndex].count);
        return { ...state, gameList: updatedGameArray };
      }
    case "INCREMENT_COUNT":
      return {
        ...state,
        gameList: state.gameList.map((game) => {
          if (game.name === action.payLoad.name) {
            return { ...game, count: game.count + 1 };
          }
          return game;
        }),
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        gameList: state.gameList.map((game) => {
          if (game.name === action.payLoad.name && game.count > 0) {
            return { ...game, count: game.count - 1 };
          }
          return game;
        }),
      };
    default:
      return state;
  }
};
