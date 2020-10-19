import React from "react";
import Axios from "axios";
import { TextBlock } from "react-placeholder";
import { Nav } from "react-bootstrap";
// import Li from "./SidenavContent";
// import { Link, useLocation, useHistory } from "react-router-dom";
// import { useDispatch } from 'react-redux';

export default function Navbar(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`http://localhost:8000/api/v1/users`, {
      params: { id: 7 },
    }).then((res) => {
      const data = res.data.data[0];
      setData(data);
    });
  }, []);

  let imgDefault =
    "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true";
  // let location = useLocation();
  // let history = useHistory();
  // const dispatch = useDispatch()
  // const onLogout = () => {
  //   dispatch(AuthLogout())
  //   history.replace("/");
  // };

  return (
    <Nav className="navbar navbar-expand-lg bg-light my-navbar">
      <div className="container">
        <a className="navbar-brand active pl-3 ml-5" href="/">
          <b>Zwallet</b>
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
                      src={data.avatar !== null ? data.avatar : imgDefault}
                      className="avatar"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7 col-sm-3 col-md-6 mr-n2">
                  <div className="row">
                    <div className="col-sm-12 col-md-10 mt-2">
                      <p>
                        <b>
                          {!data ? (
                            <TextBlock
                              rows={1}
                              style={{
                                width: 170,
                                marginBottom: 10,
                                height: 25,
                              }}
                              color="#f0f0f0"
                            />
                          ) : (
                            `${data.firstName} ${data.lastName}`
                          )}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <span>
                        {!data ? (
                          <TextBlock
                            rows={1}
                            style={{ width: 150 }}
                            color="#f0f0f0"
                          />
                        ) : (
                          data.phone
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
                      width="25"
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
