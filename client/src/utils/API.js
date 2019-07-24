import axios from "axios";

export default {
    saveVenue: function(dbModel) {
        return axios.post("/api/venues", dbModel);
    },
    updateVenue: function(dbModel) {
        return axios.put("/api/venue", dbModel)
    },
    getVenue: function(dbModel) {
        return axios.get("/api/venues", dbModel);
    },
    getVenues: function(dbModel) {
        return axios.get("/api/venue", dbModel);
    },
    resetVenues: function(dbModel) {
        return axios.put("/api/venues", dbModel)
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
    saveBanner: function(dbModel) {
        return axios.post("/api/banners", dbModel);
    },
    getBanners: function(dbModel) {
        return axios.get("/api/banners", dbModel)
    },
    getAuth: function(security) {
        return axios.get("/api/auth/checkAuth");
    },
    getProductionStatus: function() {
        return axios.get("/api/auth/getProductionStatus")
    },
    getAllUsers: function() {
      return axios.get("/api/users/getAllUsers")
    },
    updateUser: function(userData) {
      return axios.post("/api/users/updateUser", userData)
    }
}
