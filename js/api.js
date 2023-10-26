const BASE_URL = `http://localhost:5500/api`;
const RESOURSE_URL = `${BASE_URL}/game`;

const baseRequest = async ({ urlPath  = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${RESOURSE_URL}${urlPath }`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

export const getAllGames = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  return rawResponse.json();
};
export const getSortedGames = async () => {
  const rawResponse = await baseRequest({
    pathUrl: `/sortgame`,
    method: "GET",
  });
  return rawResponse.json();
};

export const postGame = (body) => baseRequest({ method: "POST", body });

export const updateGame = (id, body) =>
  baseRequest({ urlPath : `/${id}`, method: "PATCH", body });

  export const deleteGameById = (id) =>
  baseRequest({ urlPath : `/${id}`, method: "DELETE" });

