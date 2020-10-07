import React from "react";
import Axios from 'axios';

export default function HistoryItems(props) {
  let [data, setData] = React.useState([])

  React.useEffect(()=>{
    Axios.get(`https://zwallet-api-wafa.herokuapp.com/history`)
        .then((res)=>{
          console.log(res.data)
          let data = res.data.data
          setData(data)
        })
  }, [])

  if (props !== null) {
    const slice = (start, end) => {
      return data = data.slice(start, end);
    };
    slice(props.start, props.end);
  }
  return data.map((item) => {
    return (
      <div className="container mb-3">
        <div className="row text-sm-center text-center">
          <div className="col-sm-8 col-md-8">
            <div className="row small mb-1">
              <div className="col-sm-4 col-md-4 ml-sm-0 ml-md-n3 ml-lg-n3">
                <img src={(item.income===1) ? item.sender_avatar : item.receiver_avatar} alt="" />
              </div>
              <div className="col-sm-8 col-md-8 text-left">
                <div className="container">
                  <p>
                    <b>{(item.income===1) ? item.sender_name : item.receiver_name}</b>
                  </p>
                  <p className="description">{item.type}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 text-center">
            <div className="row small mb-3 text-sm-center text-center">
              <div
                className={
                  (item.income === 1)
                    ? "mx-auto small plus"
                    : "mx-auto small minus"
                }
              >
                <h6>{(item.income===1)? `+Rp`+ item.amount : `-Rp`+ item.amount}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
