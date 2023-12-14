import axios from "axios";

const API_URL = "https://api.timbu.com/";

const $http = axios.create({
   headers: {
      "Access-Control-Allow-Origin": "*",
   },
   baseURL: API_URL,
   withCredentials: true,
});

export default $http;
