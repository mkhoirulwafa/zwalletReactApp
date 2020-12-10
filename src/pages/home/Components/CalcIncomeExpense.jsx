import React from 'react';

export default function CalcIncomeExpense(){
    let incomeExpense = [
      {
        id: 0,
        title: "Income",
        img:
          "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up-green.png?raw=true",
        number: "2.160.000",
      },
      {
        id: 1,
        title: "Expense",
        img:
          "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up-red.png?raw=true",
        number: "1.120.000",
      },
    ];
    return (
      <div className="row m-2 d-flex justify-content-between mb-4">
        {incomeExpense.map((item) => {
          return (
            <div key={item.id} className="col-6 col-sm-6 col-md-6 col-lg-6 d-inline income-expense">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <h6>
                <b>Rp{item.number}</b>
              </h6>
            </div>
          );
        })}
      </div>
    );
  };
  