import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { logout } from "../Utils";

//img active & not active must fix
let sideNav = [
  {
    id: 1,
    path: "/dashboard",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/grid.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/grid-noblue.png?raw=true",
    title: "Dashboard",
    isActive: true,
  },
  {
    id: 2,
    path: "/transfer",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up-blue.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up.png?raw=true",
    title: "Transfer",
    isActive: false,
  },
  {
    id: 3,
    path: "/topup",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/plus2.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/plus.png?raw=true",
    title: "Topup",
    isActive: false,
  },
  {
    id: 4,
    path: "/profile",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/user1.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/user.png?raw=true",
    title: "Profile",
    isActive: false,
  },
];

const Li = (props) => {
  // console.log(window.location.pathname)
  let path = props.location.pathname;
  // let length = path.length;
  return sideNav.map((item) => {
    return (
      <>
        <Link to={item.path}>
          <li
            key={item.id}
            className={
              path === `/${item.title.toLowerCase()}`
                ? "list-group-item border-0 mb-4 active-bar rounded"
                : "list-group-item border-0 mb-4 rounded align-end"
            }
          >
            <div className="row pt-1">
              <div className="col-sm-2 col-md-2">
                <img
                  src={
                    path === `/${item.title.toLowerCase()}`
                      ? item.imgActive
                      : item.imgInactive
                  }
                  className="list-icon float-left"
                  alt=""
                />
              </div>
              <div className="col-md-7 d-none d-sm-none d-md-block">
                <h6
                  className={
                    path.includes(`/${item.title.toLowerCase()}`)
                      ? "active"
                      : ""
                  }
                >
                  {item.title}
                </h6>
              </div>
            </div>
          </li>
        </Link>
      </>
    );
  });
};

export default function SideNav(props) {
  let location = useLocation();
  let history = useHistory();
  const onLogout = () => {
    logout();
    history.replace("/");
  };
  return (
    <div className="d-none d-sm-none d-md-block d-lg-block col-sm-2 col-md-4 col-lg-3 rounded rounded-bottom mb-4 min-vh-100">
      <ul className="card list-group d-flex rounded-bottom">
        <Li location={location}/>
        <Link onClick={()=> onLogout()} className='mt-5'>
          <li
            key= '5'
            className="list-group-item border-0 mb-4 rounded align-end"
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
