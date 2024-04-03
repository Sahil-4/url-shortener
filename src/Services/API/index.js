import axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_API_URL_BASE,
};

const API = axios.create(options);

API.interceptors.request.use((req) => {
  const auth = JSON.parse(localStorage.getItem("profile"));

  if (auth) req.headers.authtoken = `Bearer ${auth.token}`;

  return req;
});

export default API;
