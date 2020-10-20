import Axios from "axios";
// import { useHistory } from 'react-router-dom';

const UsersRequest = () => {
  return {
    type: "USERS_REQUEST",
  };
};
const UsersSuccess = (data) => {
  return {
    type: "USERS_SUCCESS",
    payload: data,
  };
};
const UsersError = (error) => {
  return {
    type: "USERS_ERROR",
    payload: error,
  };
};

export const getUsers = (fields) => {
  return (dispatch) => {
    dispatch(UsersRequest());
    return Axios({
      method: "get",
      url: `http://localhost:8000/api/v1/users/${fields.id}`,
      headers: {
        "token": fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data
        dispatch(UsersSuccess(data));
        console.log(`${res.data.data} , ini di fetch USERS yaaaaaa butuh token:(`);
      })
      .catch((err) => {
        dispatch(UsersError(err.message));
      });
  };
};
