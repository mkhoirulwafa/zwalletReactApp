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
const HistoryRequest = () => {
  return {
    type: "HISTORY_REQUEST",
  };
};
const HistorySuccess = (data) => {
  return {
    type: "HISTORY_SUCCESS",
    payload: data,
  };
};
const HistoryError = (error) => {
  return {
    type: "HISTORY_ERROR",
    payload: error,
  };
};

//action Get User By Search at Transfer page
export const getSearch = (fields) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    return Axios({
      method: "get",
      url: `http://localhost:8000/api/v1/transfer/search/${fields.id}/${fields.key}`,
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(TransferSuccess(data));
        console.log(`${res.data.data} , ini di SEARCH`);
      })
      .catch((err) => {
        dispatch(TransferError(err.message));
      });
  };
};
export const getHistory = (fields) => {
  return (dispatch) => {
    dispatch(HistoryRequest());
    return Axios({
      method: "get",
      url: `http://localhost:8000/api/v1/transfer/history/${fields.id}`,
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        console.log(res.data, "PLIS");
        const data = res.data.data;
        dispatch(HistorySuccess(data));
        console.log(`${res.data.data} , ini di history`);
      })
      .catch((err) => {
        dispatch(HistoryError(err.message));
      });
  };
};
