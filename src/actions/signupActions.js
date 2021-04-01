import axios from "axios";

export const userSignupRequest = (userData) => (dispatch) => {
  return axios.post("/api/users", userData);
};
