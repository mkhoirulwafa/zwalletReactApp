import React, { useState } from "react";
import { useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//styling
import "../Topup/src/css/topup.css";
import "react-placeholder/lib/reactPlaceholder.css";
import Descript from "../login/src/components/Description";
import { useHistory } from "react-router-dom";

export default function ChangePin(props) {
  const [currentPin, setCurrentPin] = useState("");
  const Users = useSelector((s) => s.Users);

  const history = useHistory();
  const handleChange = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = "";
    } else {
      handleNext(e);
    }
  };
  const handleEndPin = (e) => {
      console.log(e)
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = "";
    }
    let input = document.getElementsByTagName("input");
    let temp = "";
    for (let i = 0; i < input.length; i++) {
      temp += input[i].value;
    }
    setCurrentPin(temp)
  };
  const handleNext = (e) => {
    let nextInput = document.getElementsByTagName("input");
    for (let i = 0; i < nextInput.length; i++) {
      if (nextInput[i].value && i !== nextInput.length - 1) {
        nextInput[i + 1].focus();
      }

      if (!nextInput[i].value) {
        nextInput[i].addEventListener("keydown", (e) => {
          if (e.key === "Backspace" || e.key === "Delete") {
            if (i === nextInput.length - 1 && nextInput[i].value) {
              for(let j=0;j<nextInput.length-1;i++){
                  nextInput[i+j].value = "";
              }
              setCurrentPin('')
            } else if (nextInput[i].value) {
              nextInput[i].value = "";
            } else {
              nextInput[i - 1].focus();
            }
          }
        });
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentPin === Users.data.pin) {
      history.push("/profile/change-pin/new-pin");
    } else {
      alert("Wrong Current Pin");
      setCurrentPin("");
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <SideNav />
          <div className="col">
            <div className="container card min-vh-100 min-vw-70">
              <div className="container">
                <div className="row main-title mt-3">
                  <h6>
                    <b>Change PIN</b>
                  </h6>
                </div>
                <div className="row">
                  <Descript
                    id="dark"
                    className="description mt-3"
                    content="Type your current 6 digits security PIN to use in Zwallet."
                  />
                </div>
                <div className="row">
                  <div className="form-group form-group-lg pin mr-lg-4 mr-md-3 mr-sm-1 mr-1 mb-md-5 mt-md-4">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      maxLength="1"
                      className="mr-2"
                      required
                    />
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      maxLength="1"
                      className="mr-2"
                      required
                    />
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      maxLength="1"
                      className="mr-2"
                      required
                    />
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      maxLength="1"
                      className="mr-2"
                      required
                    />
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      maxLength="1"
                      className="mr-2"
                      required
                    />
                    <input
                      onChange={(e) => handleEndPin(e)}
                      type="text"
                      maxLength="1"
                      required
                    />
                  </div>
                  <div className="row">{currentPin}</div>
                  <div className="button btn second w-100">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block"
                      onClick={(e) => onSubmit(e)}
                    >
                      <b>Confirm</b>
                    </button>
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
}
