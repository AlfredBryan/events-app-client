import axios from "axios";

export const callApi = (endpoint, method, data = {}) => {
  return axios({
    url: endpoint,
    method,
    data
  })
    .then(response => {}) // handle response)
    .catch(error => {
      throw error;
    });
};
