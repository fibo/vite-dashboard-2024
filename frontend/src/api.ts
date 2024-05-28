import axios from "axios";
import { localWebStorage } from "./storages/webstorage";

const baseURL = "http://localhost:4000";

const api = axios.create({
  baseURL,
});

export const getAccount = async () => {
  const { data } = await api.get("/account", {
    headers: {
      authentication: localWebStorage.authenticationToken,
    },
  });
  return data;
};

export const postEnter = async () => {
  const { data } = await api.post("/enter");
  return data;
};
