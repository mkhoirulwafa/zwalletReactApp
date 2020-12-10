import React from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Row } from 'react-bootstrap';

//style
import "../src/css/style.css";
import "../login/src/css/login.css";
//components
import Input from "../../Components/input";
import LeftSide from "../../Components/LeftSide";
import Descript from "../login/src/components/Description";

const Reset = () => {
  let history = useHistory()
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState('Email not found')
  const [isDone, setIsDone] = React.useState(true)

  // React.useEffect(()=>{
  //   Axios({
  //     method: 'get',
  //     url: `http://localhost:8000/api/v1/users/7`
  //   }).then((res)=>{
  //     let data = res.data.data[0]
  //     setData(data)
  //   }).catch((err)=>{
  //     setData(err.message)
  //   })
  // })

  return (
    <Row>
      <LeftSide />
      <div className="col-md-5 align-items-center h-100">
        <div className="container">
          <Row className="row">
            <div className="col-md-9 padding-top">
              <h3>
                Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                Password In a Minutes.
              </h3>
            </div>
            <div className="col-md-9">
              <Descript
                id="dark"
                className="description"
                content="To reset your password, you must type your e-mail and we will send a 
                  link to your email and you will be directed to the reset password screens."
              />
            </div>
            <div className="col-md-9">
              <div className="email input">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  classIcon="mail"
                  classInput="email"
                  placeholder="Enter your email"
                />
              </div>
              <h6 className='text-center text-danger'>{isDone? '' : status}</h6>
              <div className="button btn second w-100">
                <Link to="/new-password">
                  <button type="button" className="btn btn-lg btn-block">
                    <b>Confirm</b>
                  </button>
                </Link>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default Reset;