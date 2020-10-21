import React from "react";
import { Link } from "react-router-dom";

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
    <div className="row mt-3">
      <div className="col-sm-12 offset-md-9 col-md-3 mt-2">
        <div className="border-0">
          <div className="container mb-2 mt-n2 btn primary">
            <Link to="/confirmation">
              <button type="button" className="btn btn-lg text-white">
                Try Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransferFailed = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <div className="row mb-3">
                      <div className="m-auto">
                        <img
                          src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/failed.png?raw=true"
                          alt=""
                          className="m-auto"
                        />
                        <br />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="m-auto mt-3">
                        <h6 className="m-auto">
                          <b>Transfer Failed</b>
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

export default TransferFailed;