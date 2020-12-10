import Axios from "axios";

import { USER_URI } from "../Utils/URI";

const DeletePhone = (token, id) => {
  const promise = new Promise((resolve, reject) => {
    Axios.get(`${USER_URI}/phone/${id}`, {
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
const UpdateUser = (token, data) => {
  const promise = new Promise((resolve, reject) => {
    Axios.patch(`${USER_URI}`, data, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
      .then((result) => {
        resolve(result.data.data);
        console.log(result.data.data);
        console.log("=======resuyykkkktt========");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return promise;
};

export { DeletePhone, UpdateUser };
