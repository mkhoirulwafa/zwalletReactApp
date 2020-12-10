import React from "react";

//components
import Nav from '../../Components/Nav'
import SideNav from '../../Components/SideNav'
import Footer from '../../Components/Footer'
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";

import "react-placeholder/lib/reactPlaceholder.css";
import { useDispatch, useSelector } from "react-redux";
import API from "../../Services";

//style
import "../src/css/style.css";
import "./src/css/history.css";

const History=()=> {
  const dispatch = useDispatch();
  const [loading, setLoading]= React.useState(false)
  const [historyData1, setHistoryData1] = React.useState()
  const [historyData2, setHistoryData2] = React.useState()
  const [limitWeek, setLimitWeek] = React.useState(2)
  const [limitMonth, setLimitMonth] = React.useState(2)
  const Auth = useSelector((s) => s.Auth);
  React.useEffect(() => {
    setLoading(true)
    API.HistoryTransaction(Auth.data.token, Auth.data.id, limitWeek)
    .then((res)=>{
      setHistoryData1(res)
      setLoading(false)
    })
  }, [dispatch, limitWeek, Auth.data.token, Auth.data.id]);
  React.useEffect(() => {
    setLoading(true)
    API.HistoryTransaction(Auth.data.token, Auth.data.id, limitMonth)
    .then((res)=>{
      setHistoryData2(res)
      setLoading(false)
    })
  }, [dispatch, limitMonth, Auth.data.token, Auth.data.id]);
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row mr-5 ml-5">
            <SideNav />
            <div className="col-12 col-sm-10 col-md-8 col-lg-9 min-vh-100">
                <div className="container card min-vh-100">
                    <div className="container">
                        <div className="row main-title mt-3">
                            <h6><b>Transaction History</b></h6> <br/>
                        </div>
                        <div className="row secondary">
                            <h6>This Week</h6>
                        </div>
                        {
                          historyData1?.map((item)=>{
                            return (
                        <>
                          <div key={item.id} className="container mb-3">
                            <div className="row text-sm-center text-center">
                              <div className="col-sm-8 col-md-8">
                                <div className="row small mb-1">
                                  <div className="col-sm-4 col-md-4 ml-sm-0 ml-md-n3 ml-lg-n3">
                                    {loading ? (
                                      <RectShape
                                        delay
                                        showLoadingAnimation
                                        style={{ width: 75, height: 75, borderRadius: 10 }}
                                        color="#f0f0f0"
                                      />
                                    ) : (
                                      <img
                                        width={50}
                                        height={50}
                                        className='imgBorder'
                                        src= 
                                        {
                                          item.sender_id === Auth.data.id
                                            ? (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                                            : (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                                        }
                                        alt=""
                                      />
                                    )}
                                  </div>
                                  <div className="col-sm-8 col-md-8 text-left">
                                    <div className="container">
                                      {loading ? (
                                        <TextBlock
                                          delay
                                          showLoadingAnimation
                                          rows={2}
                                          style={{
                                            width: 200,
                                            height: 20,
                                          }}
                                          color="#f0f0f0"
                                        />
                                      ) : (
                                        <>
                                          <p>
                                            <b>
                                              {item.sender_id === Auth.data.id
                                                ? item.receiver_name
                                                : item.sender_name}
                                            </b>
                                          </p>
                                          <p className="description">
                                            {item.type}
                                            </p>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-4 text-center">
                                <div className="row small mb-3 text-sm-center text-center">
                                  <div
                                    className=
                                    {
                                      item.sender_id === Auth.data.id
                                        ? "mx-auto small minus"
                                        : "mx-auto small plus"
                                    }
                                  >
                                    {loading ? (
                                      <TextBlock
                                        delay
                                        showLoadingAnimation
                                        rows={1}
                                        style={{
                                          width: 100,
                                          height: 20,
                                        }}
                                        color="#f0f0f0"
                                      />
                                    ) : (
                                      <h6>
                                        {item.sender_id === Auth.data.id
                                          ? `-Rp` + item.amount
                                          : `+Rp` + item.amount}
                                      </h6>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                            )
                          })
                        }
                        <div className='text-center m-3'>
                          <div className='text-primary' onClick={()=> setLimitWeek(limitWeek+2)}>Load More</div>
                        </div>
                        <div className="row secondary">
                            <h6>This Month</h6>
                        </div>
                        {
                          historyData2?.map((item)=>{
                            return (
                        <>
                          <div key={item.id} className="container mb-3">
                            <div className="row text-sm-center text-center">
                              <div className="col-sm-8 col-md-8">
                                <div className="row small mb-1">
                                  <div className="col-sm-4 col-md-4 ml-sm-0 ml-md-n3 ml-lg-n3">
                                    {loading ? (
                                      <RectShape
                                        delay
                                        showLoadingAnimation
                                        style={{ width: 75, height: 75, borderRadius: 10 }}
                                        color="#f0f0f0"
                                      />
                                    ) : (
                                      <img
                                        width={50}
                                        height={50}
                                        className='imgBorder'
                                        src= 
                                        {
                                          item.sender_id === Auth.data.id
                                            ? (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                                            : (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                                        }
                                        alt=""
                                      />
                                    )}
                                  </div>
                                  <div className="col-sm-8 col-md-8 text-left">
                                    <div className="container">
                                      {loading ? (
                                        <TextBlock
                                          delay
                                          showLoadingAnimation
                                          rows={2}
                                          style={{
                                            width: 200,
                                            height: 20,
                                          }}
                                          color="#f0f0f0"
                                        />
                                      ) : (
                                        <>
                                          <p>
                                            <b>
                                              {item.sender_id === Auth.data.id
                                                ? item.receiver_name
                                                : item.sender_name}
                                            </b>
                                          </p>
                                          <p className="description">
                                            {item.type}
                                            </p>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 col-md-4 text-center">
                                <div className="row small mb-3 text-sm-center text-center">
                                  <div
                                    className=
                                    {
                                      item.sender_id === Auth.data.id
                                        ? "mx-auto small minus"
                                        : "mx-auto small plus"
                                    }
                                  >
                                    {loading ? (
                                      <TextBlock
                                        delay
                                        showLoadingAnimation
                                        rows={1}
                                        style={{
                                          width: 100,
                                          height: 20,
                                        }}
                                        color="#f0f0f0"
                                      />
                                    ) : (
                                      <h6>
                                        {item.sender_id === Auth.data.id
                                          ? `-Rp` + item.amount
                                          : `+Rp` + item.amount}
                                      </h6>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                            )
                          })
                        }
                        <div className='text-center m-3'>
                          <div className='text-primary' onClick={()=> setLimitMonth(limitMonth+2)}>Load More</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default History;
