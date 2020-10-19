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
            <h5>Page</h5>
            <h2>
              <b>Admin</b>
            </h2>
            <br />
            <h6>Only admin can access this page</h6>
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