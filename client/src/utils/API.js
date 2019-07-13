import axios from "axios";

export default {
    saveVenue: function(dbModel) {
        return axios.post("/api/venues", dbModel);
    },
    getVenue: function(dbModel) {
        return axios.get("/api/venues", dbModel);
    },
    saveTables: function(dbModel) {
        return axios.post("/api/tables", dbModel);
    },
    getTables: function(dbModel) {
        return axios.get("/api/tables", dbModel);
    },
    updateTables: function(dbModel) {
        return axios.put("/api/tables", dbModel);
    },
    getAuth: function(security) {
        return axios.get("/api/auth/checkAuth");
    },
    getAllUsers: function() {
      return axios.get("/api/users/getAllUsers")
    }
}
