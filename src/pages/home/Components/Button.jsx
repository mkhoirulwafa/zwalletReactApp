import React from 'react';

export default function Button(){
    let btn = [
      {
        img:
          "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up1.png?raw=true",
        title: "Transfer",
      },
      {
        img:
          "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/plus1.png?raw=true",
        title: "Topup",
      },
    ];
    return btn.map((item) => {
      return (
        <a href="transfer.html">
          <div className="row d-flex justify-content-around tf-tp mb-3">
            <button className="btn btn-block bouton-image p-2 text-white">
              <span className="myButton ml-n2">
                <img
                  src={item.img}
                  width="28px"
                  alt=""
                />
              </span>
              <b>{item.title}</b>
            </button>
          </div>
        </a>
      );
    });
  };