import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//style
import "../src/css/style.css";
import "./src/css/transfer.css";
import Loading from "./Components/Loading";
import API from "../../Services";

const Receiver = (props) => {
  const [key, setKey] = React.useState(``);
  const [dataUsers, setDataUsers] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);

  React.useEffect(() => {
    setLoading(true)
    API.Search(Auth.data.token, key, props.limit).then((res)=>{
      setDataUsers(res)
      setLoading(false)
    })
  }, [key, dispatch, Auth.data.token, props.limit]);

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
        dataUsers?.map((item) => {
          return (
            <>
              <div
                key={item.id}
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
                              alt="" width={50} height={50}
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
  const [limit, setLimit] = React.useState(4);
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-12 col-sm-12 col-md-10 col-lg-9">
            <div className="container card min-vh-100">
              <div className="container">
                <Receiver {...props} limit={limit} />
                <div className='text-center m-3'>
                  <div className='text-primary' onClick={()=> setLimit(limit+3)}>Load More</div>
                </div>
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
