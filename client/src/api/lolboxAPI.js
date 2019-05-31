import axios from "axios";

export default {
  getLolbox: function() {
    return axios.get("/api/lolbox/");
  },
  getUserLolbox: function(userId) {
    return axios.get("/api/users/" + userId);
  },
  deleteLolboxItem: function(id) {
    return axios.delete("/api/lolbox/" + id);
  },
  saveLolboxItem: function(lolboxData) {
    return axios.post("/api/lolbox", lolboxData);
  },
  editLolbox: function(id, lolboxData) {
    return axios.put("/api/lolbox/" + id, lolboxData);
  }
};
