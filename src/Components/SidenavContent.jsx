import React from "react";
import { Link } from "react-router-dom";

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

export default function Li (props) {
  let path = props.location.pathname;
  return sideNav.map((item) => {
    return (
      <Link to={item.path}>
        <li
          key={item.id}
          className={
            path.includes(`/${item.title.toLowerCase()}`)
              ? "list-group-item border-0 mb-4 active-bar rounded"
              : "list-group-item border-0 mb-4 rounded align-end"
          }
        >
          <div className="row pt-1">
            <div className="col-sm-2 col-md-2">
              <img
                src={
                    path.includes(`/${item.title.toLowerCase()}`)
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
                  path.includes(`/${item.title.toLowerCase()}`) ? "active" : ""
                }
              >
                {item.title}
              </h6>
            </div>
          </div>
        </li>
      </Link>
    );
  });
};
