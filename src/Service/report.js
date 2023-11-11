import axios from "axios";

const mentalPlusEndpoint = "https://api.mentalplus.app";

const axiosInstance = axios.create({
  baseUrl: mentalPlusEndpoint,
});

const getGameResult = async (gameCode) => {
  const params = new URLSearchParams();
  params.append("action", "getResult");
  params.append("code", gameCode);
  return await axiosInstance.post(
    `${mentalPlusEndpoint}/public/index.php`,
    params
  );
};

export { getGameResult };
export {mentalPlusEndpoint}
