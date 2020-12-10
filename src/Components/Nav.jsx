import React from "react";
// import Axios from "axios";
import { TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";
import { Nav } from "react-bootstrap";
// import Li from "./SidenavContent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import API from "../Services";
// import { getUsers } from "./../redux/actions/Users";
import './styles.css'
export default function Navbar(props) {
  const [dataUser, setDataUser] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  // const { data, loading } = useSelector((s) => s.Users);
  const {data} = useSelector((s) => s.Auth);

  // console.log(`${Auth.data},  HALOOOO`);

  React.useEffect(() => {
    setLoading(true)
    API.Profile(data?.token, data?.id).then((res)=>{
      setDataUser(res)
      setLoading(false)
    })
  }, [dispatch, data]);

  return (
    <Nav className="navbar navbar-expand-lg bg-light my-navbar">
      <div className="container">
        <a className="navbar-brand active pl-3 ml-5" href="/">
          <h4>
            <b>Zwallet</b>
          </h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto mt-lg-0">
            <div className="container profile-badge col-sm-12">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                  <div className="container">
                    <img
                    width={50}
                    height={60}
                      src={
                        data.avatar === ""
                          ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true"
                          : dataUser?.avatar
                      }
                      className="avatar rounded imgBorder box-sizing-border-box"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7 col-sm-3 col-md-6 mr-n2">
                  <div className="row">
                    <div className="col mt-2">
                      <p className="text">
                        <b>
                          {loading ? (
                            <TextBlock
                              delay
                              showLoadingAnimation
                              rows={1}
                              style={{
                                width: 170,
                                marginBottom: 7,
                                height: 25,
                              }}
                              color="#f0f0f0"
                            />
                          ) : (
                            dataUser?.firstName + " " + dataUser?.lastName
                          )}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <span>
                        {loading ? (
                          <TextBlock
                            delay
                            showLoadingAnimation
                            rows={1}
                            style={{ width: 150 }}
                            color="#f0f0f0"
                          />
                        ) : data.phone === "" ? (
                          <Link to="add-phone" className="text-primary">
                            Add your phone number
                          </Link>
                        ) : (
                          `+${dataUser?.phone}`
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-2 col-sm-3 col-md-3 mt-2">
                  <div className="container w-10">
                    <img
                      src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/bell.png?raw=true"
                      className="icon notification"
                      alt=""
                      width="10"
                    />
                  </div>
                </div>
              </div>
              {/* new row for sidenav in nav */}
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
}

// const ah = () => {
//   return (
//     <>
//       <div className="row">
//         <ul className="list-group d-flex rounded-bottom">
//           <Li location />
//           <Link
//             onClick={() => {
//               /* add onclick here */
//             }}
//           >
//             <li
//               key="5"
//               className="list-group-item border-0 mb-4 rounded align-end"
//             >
//               <div className="row pt-1">
//                 <div className="col-sm-2 col-md-2">
//                   <img
//                     src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/log-out.png?raw=true"
//                     className="list-icon float-left"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-md-7 d-none d-sm-none d-md-block">
//                   <h6 className="">Logout</h6>
//                 </div>
//               </div>
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
// };
