import Axios from "axios";

import { USER_URI } from "../Utils/URI";

const Search = (token, key, limit) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${USER_URI}/search?limit=${limit}&name=${key}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((result) => {
        resolve(result.data.data);
        console.log(result.data.data);
        console.log("=======resuyykkkktt========");
      })
      .catch((err) => {});
  });
  return promise;
};
// const HistoryTransaction = (token, id, limit) => {
//   const promise = new Promise((resolve, reject) => {
//     Axios.get(`${TRANSFER_URI}/history/${id}?limit=${limit}`, {
//       headers: {
//         token: `Bearer ${token}`,
//       },
//     })
//       .then((result) => {
//         resolve(result.data.data);
//         console.log(result.data.data);
//         console.log("=======resuyykkkktt========");
//       })
//       .catch((err) => {});
//   });
//   return promise;
// };

export { Search };
