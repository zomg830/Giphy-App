import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  header: {
    "cross-domain": true
  }
});
