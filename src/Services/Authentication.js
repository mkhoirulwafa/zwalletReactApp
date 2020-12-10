import Axios from "axios";

import { AUTH_URI } from "../Utils/URI";

const Register = (data) => {
  const promise = new Promise((resolve, reject) => {
    Axios.post(`${AUTH_URI}/register`, data)
      .then((result) => {
        resolve(result.data.data);
        console.log(result.data.data);
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

export { Register };
