import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthLogin } from "../../redux/actions/Auth";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

//style
import "../src/css/style.css";
import "./src/css/login.css";
//components
import Descript from "./src/components/Description";
import LeftSide from "../../Components/LeftSide";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading]= React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(
      AuthLogin({
        email: email,
        password: password,
        history: props.history,
      })
    ).then((res)=> setLoading(false))
  };

  return (
    <Row className="row">
      <LeftSide />
      <div className="col-md-5 align-items-center h-100">
        <Container>
          <div className="row">
            <Col className="col-md-9 padding-top">
              <h3>
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </h3>
            </Col>
            <div className="col-md-9">
              <Descript
                id="dark"
                className="description"
                content="Transfering money is easier than ever, you can access Zwallet
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!"
              />
            </div>
            <div className="col-md-9">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="email input">
                  <span className="mail"></span>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="password input">
                  <span className="lock"></span>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="off"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    className="eye"
                    src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/eye-crossed.png?raw=true"
                    alt=""
                  />
                </div>
                <Link to="/reset-password" className="forgot mb-5">
                  Forgot password?
                </Link>
                <div className="button btn second w-100">
                  {loading ? (
                    <button
                      type="submit"
                      disabled={true}
                      className="btn btn-lg btn-block"
                    >
                      <b>Loading...</b>
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-lg btn-block">
                      <b>Login</b>
                    </button>
                  )}
                </div>
              </form>
              <div className="sign-up text-center mt-3">
                <p className="text">
                  Don’t have an account? Let’s{" "}
                  <Link to="/signup" className="a bold text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Row>
  );
};

export default Login;
