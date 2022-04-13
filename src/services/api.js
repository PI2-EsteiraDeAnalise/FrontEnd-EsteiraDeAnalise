import axios from "axios";

const apiIPDetector = axios.create({
  baseURL: "https://ipgeolocation.abstractapi.com",
});

export { apiIPDetector };
