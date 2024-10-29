// _services/homepage.service.js
import axios from "axios";

export const homepageService = {
  getHomepageData,
};

function getHomepageData() {
  return axios
    .get("http://localhost:3002/api/homepage")
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
