import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//style
import "../src/css/style.css";
import "./src/css/transfer.css";

const Receiver = (props) => {
  let [receivers, setReceivers] = React.useState([]);
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    Axios(
      {
        method: "get",
        url: `http://localhost:8000/api/v1/transfer/search/${key}`
        }
      [key]
    )
      .then((res) => {
        let data = res.data.data;
        setReceivers(data);
      })
      .catch((err) => {
        setReceivers(err.message);
      });
  }, [key]);

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
      {!receivers ? (
        <div className="container">
          <h4 className="text-warning">Receiver doesn't exists</h4>
        </div>
      ) : (
        receivers.map((item) => {
          return (
            <>
              <div
                onClick={() =>
                  props.history.push({
                    pathname: "/input-amount",
                    receiver: {
                      name: item.firstName + item.lastName,
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
                              src={!item.avatar ? imgDefault : item.avatar}
                              alt=""
                            />
                          </div>
                          <div className="col-10 col-sm-10 col-md-10 col-lg-11 pl-5 pl-sm-5 pt-1">
                            <p>
                              <b>{item.fullName}</b>
                            </p>
                            <p className="small">+62 {item.phone}</p>
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
