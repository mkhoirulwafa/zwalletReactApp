import React from 'react';
import {DateTime} from 'luxon'

export default function Detail(props){
  const {
    location: { input },
  } = props;

  const transferDate= DateTime.local().toFormat("DD - hh.mm")

    let details = [
      {
        title: "Amount",
        value: input.amount,
      },
      {
        title: "Balance Left",
        value: input.balance,
      },
      {
        title: "Date & Time",
        value: transferDate,
      },
      {
        title: "Notes",
        value: input.notes,
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