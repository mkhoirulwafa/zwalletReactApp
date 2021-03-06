import Axios from "axios";
// import { useHistory } from 'react-router-dom';

const TopupRequest = () => {
  return {
    type: "TOPUP_REQUEST",
  };
};
const TopupSuccess = (data) => {
  return {
    type: "TOPUP_SUCCESS",
    payload: data,
  };
};
const TopupError = (error) => {
  return {
    type: "TOPUP_ERROR",
    payload: error,
  };
};

export const GetTopup = (fields) => {
  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: "get",
      url: `http://localhost:8000/api/v1/topup`,
      headers: {
        "token": fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data
        dispatch(TopupSuccess(data));
        console.log(`${res.data.data} , ini di fetch Topup yaaaaaa butuh token:(`);
      })
      .catch((err) => {
        dispatch(TopupError(err.message));
      });
  };
};
