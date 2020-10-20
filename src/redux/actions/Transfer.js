import Axios from "axios";
// import { useHistory } from 'react-router-dom';

const TransferRequest = () => {
  return {
    type: "TRANSFER_REQUEST",
  };
};
const TransferSuccess = (data) => {
  return {
    type: "TRANSFER_SUCCESS",
    payload: data,
  };
};
const TransferError = (error) => {
  return {
    type: "TRANSFER_ERROR",
    payload: error,
  };
};

//action Get User By Search at Transfer page
export const getSearch = (fields) => {
    return (dispatch) => {
      dispatch(TransferRequest());
      return Axios({
        method: "get",
        url: `http://localhost:8000/api/v1/transfer/search/${fields.key}`,
        headers: {
          "token": fields.token,
        },
      })
        .then((res) => {
          const data = res.data.data
          dispatch(TransferSuccess(data));
          console.log(`${res.data.data} , ini di SEARCH`);
        })
        .catch((err) => {
          dispatch(TransferError(err.message));
        });
    };
  };
  