import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const getAccount = async () => {
  const { data } = await api.get("/account");
  return data;
};
