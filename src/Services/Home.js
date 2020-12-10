import Axios from "axios";

import { USER_URI, TRANSFER_URI } from "../Utils/URI";

const Profile = (token, id) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${USER_URI}/${id}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};
const HistoryTransaction = (token, id, limit) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${TRANSFER_URI}/history/${id}?limit=${limit}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};

export { Profile, HistoryTransaction };
