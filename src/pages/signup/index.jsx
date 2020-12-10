import React from "react";
import { Link, useHistory } from "react-router-dom";
//style
import "../src/css/style.css";
import "../login/src/css/login.css";
//components
import Input from "../../Components/input";
import Descript from "../login/src/components/Description";
import { useDispatch, useSelector } from "react-redux";
import API from '../../Services'

const Signup =(props)=> {
  const [username, setUsername]= React.useState('')
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { loading } = useSelector((s) => s.Auth);
  const history = useHistory()

  const onSubmit = (e) => {
    let data = {firstName: username.split(' ')[0],lastName: username.split(' ')[1], email: email, password: password}
    API.Register(data).then((res) => history.push({
      pathname: '/create-pin',
      state: {  // location state
        token: res.token, 
      },
    })).catch((err)=> console.log(err))
    // dispatch(
    //   AuthLogin({
    //     email: email,
    //     password: password,
    //     history: props.history,
    //   })
    // );
  };
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
              <p className='text-white'>Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage.</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 align-items-center h-100">
          <div className="container">
            <div className="row">
              <div className="col-md-9 padding-top">
                <h3>
                  Start Accessing Banking Needs With All Devices and All
                  Platforms With 30.000+ Users
                </h3>
              </div>
              <div className="col-md-9">
                <Descript
                  id="dark"
                  className="description"
                  content="Transfering money is eassier than ever, you can access Zwallet
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!"
                />
              </div>
              <div className="col-md-9">
                <div className="name input">
                  <Input
                    classIcon="username"
                    classInput="username"
                    placeholder="Enter your username"
                    onChange={(e)=> setUsername(e.target.value)}
                  />
                </div>
                <div className="email input">
                  <Input
                    classIcon="mail"
                    classInput="email"
                    placeholder="Enter your email"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
                <div className="password input">
                  <Input
                    classIcon="lock"
                    classInput="password"
                    placeholder="Enter your password"
                    visibility="eye"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div className="button btn second w-100">
                  {/* <Link to="/create-pin"> */}
                    <button type="submit" className="btn btn-lg btn-block" onClick={()=> onSubmit()}>
                      <b>Sign Up</b>
                    </button>
                  {/* </Link> */}
                </div>
                <div className="sign-up text-center mt-3 ">
                  <p className="text">
                    Already have an account? Let’s <Link to='/' className='a bold text-primary'>Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signup;
