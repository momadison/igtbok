import axios from "axios";

export default {
    saveVenue: function(dbModel) {
        return axios.post("/api/venues", dbModel);
    }
}