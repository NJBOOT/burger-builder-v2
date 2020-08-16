import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-v2-dd0b2.firebaseio.com/",
});

export default instance;
