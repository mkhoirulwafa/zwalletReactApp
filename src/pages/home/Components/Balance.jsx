import React from "react";

//components
import Button from './Button'
import IncomeExpense from './IncomeExpense'

const Balance = () => {
  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-9">
      <div className="container">
        <div className="row balance d-flex justify-content-between  h-100">
          <div className="col-6 col-sm-6 col-md-7 col-lg-9 mb-3 mt-3">
            <h5>Balance</h5>
            <h2>
              <b>Rp120.000</b>
            </h2>
            <br />
            <h6>+62 813-9387-7946</h6>
          </div>
          <div className="col-6 col-sm-6 col-md-5 col-lg-3 align-self-center">
            <div className="container">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <IncomeExpense />
    </div>
  );
};

export default Balance;