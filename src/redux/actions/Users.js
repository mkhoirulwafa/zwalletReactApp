import Axios from "axios";
// import { useHistory } from 'react-router-dom';

const UsersRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};
const UsersSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const Users = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: "get",
      url: `http://localhost:8000/api/v1/users`,
      headers: {
        "token": fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        dispatch(UsersSuccess(data));
      })
      .catch((err) => {
        dispatch(UsersError(err.message));
      });
  };
};
