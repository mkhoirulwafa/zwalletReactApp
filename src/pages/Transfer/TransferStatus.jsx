import React from "react";
// import { Link, useHistory } from "react-router-dom";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
import Detail from "./Components/Details";
// import ButtonPinModal from "./Components/Modal";
import "./src/css/transfer.css";

// Fetch from API PLEASEEE
const Receiver = () => {
  let receivers = [
    {
      img:
        "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/2.png?raw=true",
      name: "Samuel Suhi",
      phone: "+62 813-8492-9994",
    },
  ];
  return receivers.map((item) => {
    return (
      <div classNameName="row">
        <div classNameName="col-sm-12 col-md-12 mb-3">
          <div className="card border-0">
            <a href="inputAmount.html">
              <div className="container">
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-1">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-11 pl-5 pl-sm-5 pt-1">
                    <p>
                      <b>{item.name}</b>
                    </p>
                    <p className="small">{item.phone}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  });
};

const Button = () => {
  return (
    <>
      <div class="row mt-5 mb-3 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-end">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="button text-sm-center text-center text-md-right text-lg-right">
            <button class="col-3 col-sm-3 col-md-4 col-lg-2 small-btn-light-primary mr-2">
              <img
                src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/share-2.png?raw=true"
                alt=""
              />
            </button>
            <button class="col-9 col-sm-9 col-md-4 col-lg-5 big-btn-light-primary active mr-2">
              <img
                src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/download.png?raw=true"
                alt=""
              />
              Download PDF
            </button>
            <button class="col-12 col-sm-12 col-md-4 col-lg-5 text bold text-center text-sm-center med-btn-primary">
              <a href="home.html" class="text-white">
                Back To Home
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const TransferStatus = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card min-vh-100">
              <div className="container">
                <div class="row">
                  <div class="col-sm-12 col-md-12">
                    <div class="row mb-3">
                      <div class="m-auto">
                        <img
                          src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/success.png?raw=true"
                          alt=""
                          class="m-auto"
                        />
                        <br />
                      </div>
                    </div>
                    <div class="row mb-5">
                      <div class="m-auto mt-3">
                        <h6 class="m-auto">
                          <b>Transfer Success</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <Detail />
                <div className="row main-title mt-3">
                  <h6>
                    <b>Transfer to</b>
                  </h6>
                  <br />
                </div>
                <Receiver />
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransferStatus;
