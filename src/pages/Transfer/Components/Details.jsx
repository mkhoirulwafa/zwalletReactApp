import React from 'react';

export default function Detail(){
    let details = [
      {
        title: "Amount",
        value: "Rp100.000",
      },
      {
        title: "Balance Left",
        value: "Rp20.000",
      },
      {
        title: "Date & Time",
        value: "Time Stamp",
      },
      {
        title: "Notes",
        value: "For buying some socks",
      },
    ];
    return details.map((item) => {
      return (
        <div className="row">
          <div className="col-sm-12 col-md-12 mb-2">
            <div className="card border-0">
              <div className="container mb-2 mt-n2">
                <p>{item.title}</p>
                <h6>
                  <b>{item.value}</b> {/* Use HOOKS FROM PREV PAGEEEE */}
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };