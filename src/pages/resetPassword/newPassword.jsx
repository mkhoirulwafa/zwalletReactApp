import React from "react";
import { Link } from "react-router-dom";

//style
import "../src/css/style.css";
import "../login/src/css/login.css";
//components
import Input from "../../Components/input";
import Descript from "../login/src/components/Description";

class Login extends React.Component {
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
                  Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                  Password In a Minutes.
                </h3>
              </div>
              <div className="col-md-9">
                <Descript
                  id="dark"
                  class="description"
                  content="To reset your password, you must type your e-mail and we will send a 
                  link to your email and you will be directed to the reset password screens."
                />
              </div>
              <div className="col-md-9 mb-4">
                <div className="password input mb-5">
                  <Input
                    classIcon="lock"
                    classInput="password"
                    placeholder="Create new password"
                    visibility="eye"
                  />
                </div>
                <div className="password input">
                  <Input
                    classIcon="lock"
                    classInput="password"
                    placeholder="Create new password"
                    visibility="eye"
                  />
                </div>
                <div className="button btn second w-100 mt-5">
                  <Link to="/home">
                    <button
                      type="button"
                      className="btn btn-lg btn-block text-black-50"
                    >
                      <b>Reset Password</b>
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

export default Login;