import React from "react";
import { Link } from "react-router-dom";
//style
import "../src/css/style.css";
import "../login/src/css/login.css";
import "./src/css/createpin.css"
//components
import InputPin from "../../Components/pin";
import Descript from "../login/src/components/Description";

class Signup extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container bg col-sm-12 col-md-7 col-lg-7">
          <div className="row ml-3 ml-sm-3 ml-md-2">
            <div className="offset-md-2 col-md-9">
              <h3 className="text-white">
                <b>Zwallet</b>
              </h3>
            </div>
          </div>
          <div className="row ml-3 ml-sm-3 ml-md-2">
            <div className="col-md text-center">
              <img
                src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/hp-home.png?raw=true"
                className="mx-auto d-block img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row ml-3 ml-sm-3 ml-md-2">
            <div className="offset-md-2 col-md-10 col-sm-12">
              <h3 className="text-white">App that Covering Banking Needs.</h3>
            </div>
          </div>
          <div className="row ml-3 ml-sm-3 ml-md-2">
            <div className="col-sm-12 offset-md-2 col-md-8 col-xs mb-5">
              <Descript
                class="description light"
                content="Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage."
              />
            </div>
          </div>
        </div>
        <div className="col-md-5 align-items-center h-100">
          <div className="container">
            <div className="row">
              <div className="col-md-9 padding-top">
                <h3>
                    Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That You Created Yourself.
                </h3>
              </div>
              <div className="col-md-9">
                <Descript
                  id="dark"
                  class="description"
                  content="Create 6 digits pin to secure all your money and your data in Zwallet app. 
                  Keep it secret and don’t tell anyone about your Zwallet account password and the PIN."
                />
              </div>
              <div className="col-md-11">
              <div class="form-group form-group-lg pin mr-lg-4 mr-md-3 mr-sm-1 mr-1 mb-md-5 mt-md-4">
                <InputPin />
              </div>
                <div className="button btn second w-100">
                  <Link to="/create-pin-success">
                    <button type="button" className="btn btn-lg btn-block">
                      <b>Confirm</b>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
