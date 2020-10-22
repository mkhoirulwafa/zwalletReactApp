import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "./../../redux/actions/Transfer";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//style
import "../src/css/style.css";
import "./src/css/transfer.css";
import Loading from "./Components/Loading";

const Receiver = (props) => {
  const [key, setKey] = React.useState(``);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const { data, loading } = useSelector((s) => s.Transfer);

  React.useEffect(() => {
    dispatch(
      getSearch({
        token: Auth.data.token,
        id: Auth.data.id,
        key: key,
      })
    );
  }, [key, dispatch, Auth.data.id, Auth.data.token]);

  let imgDefault =
    "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true";
  return (
    <>
      <div className="row main-title mt-3">
        <h6>
          <b>Search Receiver</b>
        </h6>
        <br />
      </div>
      <div className="search input bg-light mt-3">
        <span className="icon-search"></span>
        <input
          id="text"
          onChange={(e) => setKey(e.target.value)}
          type="text"
          placeholder="Search receiver here"
          autoComplete="off"
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        data.map((item) => {
          return (
            <>
              <div
                onClick={() =>
                  props.history.push({
                    pathname: "/input-amount",
                    receiver: {
                      id: item.id,
                      name: item.fullName,
                      phone: item.phone,
                      avatar: item.avatar,
                    },
                  })
                }
                className="row"
              >
                <div className="col-sm-12 col-md-12 mb-3">
                  <div className="card border-0">
                    <Link to="/input-amount">
                      <div className="container">
                        <div className="row">
                          <div className="col-2 col-sm-2 col-md-2 col-lg-1">
                            <img
                              src={item.avatar==='' ? imgDefault : item.avatar}
                              alt=""
                            />
                          </div>
                          <div className="col-10 col-sm-10 col-md-10 col-lg-11 pl-5 pl-sm-5 pt-1">
                            <p>
                              <b>{item.fullName}</b>
                            </p>
                            <p className="small">+{item.phone}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

const Transfer = (props) => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-12 col-sm-10 col-md-8 col-lg-9">
            <div className="container card min-vh-100">
              <div className="container">
                <Receiver {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transfer;
