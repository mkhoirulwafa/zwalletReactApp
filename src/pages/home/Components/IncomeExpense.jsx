import React from "react";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import { Link } from "react-router-dom";
import BarChart from "../../../Components/BarChart";
//components
import CalcIncomeExpense from "./CalcIncomeExpense";
import HistoryItems from "./HistoryItem";

const TransactionHistory = () => {
  const [loading, setLoading]= React.useState(false)
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
      <div className="card container h-100">
        <div className="row mt-4 d-lg-flex">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <h6 className="mb-3">
              <b>Transaction History</b>
            </h6>
          </div>
          <div className="col-6 col-sm-6 c0l-md-6 col-lg-6 text-right ">
            <Link to="/history" className="a">
              <p className="active">
                See All
              </p>
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12">
            {/* <HistoryItems /> */}
            <div className="container mb-3" key={0}>
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
                          src= "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true"
                          // {
                          //   item.income === 1
                          //     ? (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                          //     : (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                          // }
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
                                {/* {item.income === 1
                                  ? item.sender_name
                                  : item.receiver_name} */} Tito Virgiawan
                              </b>
                            </p>
                            <p className="description">
                              {/* {item.type} */} Transfer
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
                      className="mx-auto small plus"
                      // {
                      //   item.income === 1
                      //     ? "mx-auto small plus"
                      //     : "mx-auto small minus"
                      // }
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
                        <h6>+Rp60000
                          {/* {item.income === 1
                            ? `+Rp` + item.amount
                            : `-Rp` + item.amount} */}
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mb-3" key={1}>
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
                          src= "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true"
                          // {
                          //   item.income === 1
                          //     ? (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                          //     : (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                          // }
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
                                {/* {item.income === 1
                                  ? item.sender_name
                                  : item.receiver_name} */} Khotiburrohman
                              </b>
                            </p>
                            <p className="description">
                              {/* {item.type} */} Transfer
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
                      className="mx-auto small minus"
                      // {
                      //   item.income === 1
                      //     ? "mx-auto small plus"
                      //     : "mx-auto small minus"
                      // }
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
                        <h6>-Rp80000
                          {/* {item.income === 1
                            ? `+Rp` + item.amount
                            : `-Rp` + item.amount} */}
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mb-3" key={2}>
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
                          src= "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true"
                          // {
                          //   item.income === 1
                          //     ? (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                          //     : (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                          // }
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
                                {/* {item.income === 1
                                  ? item.sender_name
                                  : item.receiver_name} */} Bambang S
                              </b>
                            </p>
                            <p className="description">
                              {/* {item.type} */} Transfer
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
                      className="mx-auto small plus"
                      // {
                      //   item.income === 1
                      //     ? "mx-auto small plus"
                      //     : "mx-auto small minus"
                      // }
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
                        <h6>+Rp500000
                          {/* {item.income === 1
                            ? `+Rp` + item.amount
                            : `-Rp` + item.amount} */}
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IncomeExpense() {
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 min-vh-80">
            <div className="card d-flex justify-content-space-around">
              <CalcIncomeExpense />
              <div className="chart min-vh-90">
                <BarChart />
              </div>
            </div>
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
