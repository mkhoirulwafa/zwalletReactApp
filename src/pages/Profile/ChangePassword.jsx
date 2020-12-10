import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//styling
import "../Topup/src/css/topup.css";
import "react-placeholder/lib/reactPlaceholder.css";
import Descript from "../login/src/components/Description";
import {updateUsers} from '../../redux/actions/Users';
import API from "../../Services";

const Input = (props) => {
  return (
    <div className="password input mt-5">
      <span className="lock"></span>
      <input
        id={props.id}
        type="password"
        placeholder={props.placeholder}
        autoComplete="off"
        required
        onChange={props.onChange}
      />
      <img
        className="eye"
        src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/eye-crossed.png?raw=true"
        alt=""
      />
    </div>
  );
};

export default function ChangePassword(props) {
  // console.log(props, 'change Password')
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  // const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const [isError, setIsError]= useState(false)
  
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (newPassword2 === newPassword) {
      API.UpdateUser(Auth.data.token, {currentPassword: currentPassword, password: newPassword}).then((res)=>{
        props.history.push('/profile')
      }).catch(()=> {
        setIsError(true)
        setTimeout(()=>{
          setIsError(false)
        }, 2000)
      })
    } else {
      setIsError(true)
      setTimeout(()=>{
        setIsError(false)
      }, 2000)
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
                    <b>Change Password</b>
                  </h6>
                </div>
                <div className="row">
                  <Descript
                    id="dark"
                    className="description mt-3"
                    content="You must enter your current password and then type your new password twice."
                  />
                </div>
                <div className="row">
                  <div className="col offset-lg-2 offset-md-2 justify-content-center container">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <Input
                        id="currentPassword"
                        placeholder="Current Password"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <Input
                        id="newPassword"
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <Input
                        id="newPassword2"
                        placeholder="Repeat New Password"
                        onChange={(e) => setNewPassword2(e.target.value)}
                      />
                      {/* <div>{currentPassword}</div>
                      <div>{newPassword}</div>
                      <div>{newPassword2}</div> */}
                      <div className='m-auto mb-3 mt-3'><p className='text-danger'>{!isError ? '' : 'Failed to Change Password, Your current or new password might be invalid'}</p></div>
                      <div className="button btn second w-100 mt-5">
                        <button type="submit" className="btn btn-lg btn-block">
                          <b>Change Password</b>
                        </button>
                      </div>
                    </form>
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
