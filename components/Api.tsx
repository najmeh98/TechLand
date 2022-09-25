import axios from "axios";

export const config = {
  apiUrl: "http://localhost:3001",
};

export const fetcher = (url: string) =>
  axios.get(`${url}`).then((res) => res.data);
