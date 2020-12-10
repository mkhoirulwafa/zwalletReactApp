import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthLogout } from "../redux/actions/Auth";
import { useDispatch } from 'react-redux';
import Li from './SidenavContent'

export default function SideNav(props) {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(AuthLogout())
    history.replace("/");
  };
  return (
    <div className="d-none d-sm-none d-md-none d-lg-block col-sm-2 col-md-4 col-lg-3 rounded rounded-bottom mb-4 min-vh-70" id="navbarSupportedContent">
      <ul className="card list-group d-flex rounded-bottom">
        <Li location={location}/>
        <Link onClick={()=> onLogout()} to='/'>
          <li
            key= '5'
            className="list-group-item border-0 rounded align-end"
          >
            <div className="row pt-1">
              <div className="col-sm-2 col-md-2">
                <img
                  src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/log-out.png?raw=true"
                  className="list-icon float-left"
                  alt=""
                />
              </div>
              <div className="col-md-7 d-none d-sm-none d-md-block">
                <h6 className="">
                  Logout
                </h6>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
