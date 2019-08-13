import axios from "axios";

export default {
    saveVenue: function(dbModel) {
        return axios.post("/api/venues", dbModel);
    },
    getVenue: function(dbModel) {
        return axios.get("/api/venues", dbModel);
    },
    getVenues: function(dbModel) {
        return axios.get("/api/venue", dbModel);
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
        console.log("dbModel", dbModel);
        return axios.post("/api/banners", dbModel);
    },
    getBanners: function(dbModel) {
        return axios.get("/api/banners", dbModel)
    },
    login: function(route) {
      return axios.get(route)
    },
    localLogin: function(loginData) {
      return axios.post('/api/auth/local', loginData)
    },
    createLocalAccount: function(loginData) {
      return axios.post('/api/auth/createLocalAccount', loginData)
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
