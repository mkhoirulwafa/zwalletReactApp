import React from "react";
import { Link } from "react-router-dom";
//components
import CalcIncomeExpense from "./CalcIncomeExpense";
import HistoryItems from "./HistoryItem";

const TransactionHistory = () => {
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
              <p on className="active">
                See All
              </p>
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12">
            <HistoryItems />
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 h-100">
            <div className="card">
              <CalcIncomeExpense />
              <div className="chart">
                <canvas id="myChart" width="400" height="380"></canvas>
              </div>
            </div>
          </div>
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
