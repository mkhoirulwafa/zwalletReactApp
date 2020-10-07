import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
//style
import "../src/css/style.css";
import "./src/css/inputAmount.css";

const Receiver = () => {
  let receiver = [
    {
      img:
        "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/2.png?raw=true",
      name: "Samuel Suhi",
      phone: "+62 813-8492-9994",
    },
  ];
  return receiver.map((item) => {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 mb-3">
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

const InputAmount = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`https://zwallet-api-wafa.herokuapp.com/profile`, { params: { id: 7 } }).then(
      (res) => {
        // console.log(res.data);
        const data = res.data.data;
        setData(data);
      }
    ).catch((err)=>{setData(err.message)});

    Axios({
      method: 'post',
      url: ``
    })
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card">
              <div className="container">
                <div className="row main-title mt-3">
                  <h6>
                    <b>Transfer to</b>
                  </h6>
                  <br />
                </div>
                <Receiver />
                <div className="row mt-2 mb-2">
                  <div className="col-sm-12 col-md-6">
                    <p className="secondary">
                      Type the amount you want to transfer and then press
                      continue to the next steps.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 mb-2">
                    <h1 className="text-center secondary">
                      <input
                        onChange="mustNumber(this)" //MUST FIX THISSSSSSSSS
                        className="amount input-amount text-center border-none"
                        type="text"
                        placeholder="0.00"
                        maxLength="14"
                      />
                    </h1>
                  </div>
                </div>
                {data.map((item) => {
                  return (
                    <div className="row">
                      <div className="col-sm-12 col-md-12 mb-2">
                        <p className="text-center">
                          <b>Rp{item.balance} Available</b> {/*  BALANCE */}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="row justify-content-center mb-5">
                  <div className="col-sm-12 col-md-6 mb-2">
                    <div className="search input mt-3 bg-transparent">
                      <span className="icon-search"></span>
                      <input
                        id="text"
                        type="text"
                        placeholder="Add some notes.."
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12 offset-md-9 col-md-3 mt-2">
                    <div className="border-0">
                      <div className="container mb-2 mt-n2 btn primary">
                        <Link to="/confirmation">
                          <button
                            type="button"
                            className="btn btn-lg text-white"
                          >
                            Continue
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputAmount;
