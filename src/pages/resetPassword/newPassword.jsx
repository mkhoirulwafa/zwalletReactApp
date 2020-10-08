import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

//style
import "../src/css/style.css";
import "../login/src/css/login.css";
//components
import Input from "../../Components/input";
import LeftSide from "../../Components/LeftSide";
import Descript from "../login/src/components/Description";

const Login = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [newPassword2, setNewPassword2] = React.useState("");
  const [status, setStatus] = React.useState("");

  let handleSubmit = () => {
    if (newPassword === newPassword2) {
      Axios({
        method: "patch",
        url: `https://zwallet-api-wafa.herokuapp.com/users`,
        data: { password: newPassword2 },
      })
        .then((res) => {
          let data = res.data.data[0];
          setStatus(data.message);
        })
        .catch((err) => {
          setStatus(err.message);
        });
      alert(status);
    }
  };

  return (
    <div className="row">
      <LeftSide />
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
                  onChange={(e) => setNewPassword(e.target.value)}
                  classIcon="lock"
                  classInput="password"
                  placeholder="Create new password"
                  visibility="eye"
                />
              </div>
              <div className="password input">
                <Input
                  onChange={(e) => setNewPassword2(e.target.value)}
                  classIcon="lock"
                  classInput="password"
                  placeholder="Create new password"
                  visibility="eye"
                />
              </div>
              <div className="button btn second w-100 mt-5">
                <Link to="/home">
                  <button
                    onClick={() => handleSubmit}
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
};

export default Login;
