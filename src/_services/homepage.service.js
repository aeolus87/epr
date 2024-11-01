// _services/homepage.service.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
export const homepageService = {
  getHomepageData,
};

function getHomepageData() {
  return axios
    .get(`${API_URL}/api/homepage`)
    .then((response) => {
      const data = response.data[0] || response.data;
      return {
        scrimEvents: data.scrimEvents || [],
        clanManagers: data.clanManagers || [],
        maps: data.maps || [],
      };
    })
    .catch((error) => {
      console.error("Error fetching homepage data:", error);
      throw error;
    });
}
