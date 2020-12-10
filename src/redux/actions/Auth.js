import Axios from "axios";

import { AUTH_URI } from "../../Utils/URI";
// import { useHistory } from 'react-router-dom';

const AuthLoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};
const AuthLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
const AuthLoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};
export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios.post(`${AUTH_URI}/login`, fields)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        console.log("======Nih=====");
        dispatch(AuthLoginSuccess(data));
      })
      .catch((err) => {
        dispatch(AuthLoginError(err.message));
      });
  };
};
