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

const UpdateUserRequest = () => {
  return {
    type: "UPDATE_USER_REQUEST",
  };
};
const UpdateUserSuccess = (data) => {
  return {
    type: "UPDATE_USER_SUCCESS",
    payload: data,
  };
};
const UpdateUserError = (error) => {
  return {
    type: "UPDATE_USER_ERROR",
    payload: error,
  };
};

const DeleteUserRequest = () => {
  return {
    type: "DELETE_USER_REQUEST",
  };
};
const DeleteUserSuccess = (data) => {
  return {
    type: "DELETE_USER_SUCCESS",
    payload: data,
  };
};
const DeleteUserError = (error) => {
  return {
    type: "DELETE_USER_ERROR",
    payload: error,
  };
};

//action Get User By ID
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
// Update User

export const updateUsers = (fields) => {
  return (dispatch) => {
    dispatch(UpdateUserRequest());
    const data = fields.data;
    return Axios({
      method: "patch",
      url: `http://localhost:8000/api/v1/users/${fields.id}`,
      data: data,
      headers: {
        "token": `Bearer ${fields.token}`,
      },
    })
      .then((res) => {
        const data = res.data.data
        dispatch(UpdateUserSuccess(data));
        console.log(`${res.data.data} , update Users`);
        fields.history.push('/profile')
      })
      .catch((err) => {
        dispatch(UpdateUserError(err.message));
      });
  };
};
// delete
export const DeleteUsers = (fields) => {
    return (dispatch) => {
      dispatch(DeleteUserRequest());
      return Axios({
        method: "delete",
        url: `http://localhost:8000/api/v1/users/${fields.id}`,
        headers: {
          "token": fields.token,
        },
      })
        .then((res) => {
          const data = res.data.data
          dispatch(DeleteUserSuccess(data));
          console.log(`${res.data.data} , Delete User`);
        })
        .catch((err) => {
          dispatch(DeleteUserError(err.message));
        });
    };
  };