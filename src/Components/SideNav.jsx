import React from "react";
import { Link, useLocation } from "react-router-dom";

//img active & not active must fix
let sideNav = [
  {
    path: "/dashboard",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/grid.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/grid-noblue.png?raw=true",
    title: "Dashboard",
    isActive: true,
  },
  {
    path: "/transfer",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up-blue.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/arrow-up.png?raw=true",
    title: "Transfer",
    isActive: false,
  },
  {
    path: "/topup",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/plus2.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/plus.png?raw=true",
    title: "Topup",
    isActive: false,
  },
  {
    path: "/profile",
    imgActive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/user1.png?raw=true",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/user.png?raw=true",
    title: "Profile",
    isActive: false,
  },
  {
    path: "/",
    imgInactive:
      "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/log-out.png?raw=true",
    title: "Logout",
    isActive: false,
  },
];

const Li = (props) => {
  // console.log(window.location.pathname)
  let path = props.location.pathname;
  // let length = path.length;
  return sideNav.map((item) => {
    return (
      <Link to={item.path}>
        <li
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
              <h6 className={path === `/${item.title.toLowerCase()}` ? "active" : ""}>
                {item.title}
              </h6>
            </div>
          </div>
        </li>
      </Link>
    );
  });
};

export default function SideNav(props) {
  let location = useLocation();
  return (
    <div className="d-none d-sm-none d-md-block d-lg-block col-sm-2 col-md-4 col-lg-3 rounded rounded-bottom mb-4 min-vh-100">
      <ul className="card list-group d-flex rounded-bottom">
        <Li location={location} />
      </ul>
    </div>
  );
}
