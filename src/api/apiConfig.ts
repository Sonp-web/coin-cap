import axios from "axios";

const instance = axios.create({
  baseURL: "https://rest.coincap.io/v3",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});
export default instance;
