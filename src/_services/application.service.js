// services/applicationService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

export const applicationService = {
  submitApplicationData,
};

function submitApplicationData(applicationData) {
  return axios
    .post(`${API_URL}/api/application`, applicationData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error submitting application data:", error);
      throw error;
    });
}
