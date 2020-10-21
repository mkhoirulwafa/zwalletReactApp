import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
// import TopupData from './Components/TopupData'

//styling
import "./src/css/topup.css";
import { GetTopup } from "./../../redux/actions/Topup";
import { TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const TopupData = (props) => {
  // state = {
  //   data: [],
  //   number: '',
  //   title: '',
  //   description: ''
  // };
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.Topup);
  const Auth = useSelector((s) => s.Auth);

  useEffect(() => {
    dispatch(
      GetTopup({
        token: Auth.data.token,
      })
    );
  }, [dispatch, Auth.data.token]);

  return data.map((item) => {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 mb-2">
          <div className="card border-0">
            <div className="container mb-2 mt-n2">
              <div className="row d-flex align-items-center mt-2">
                <h5 className="active ml-2">
                  <b>{item.number}</b>
                </h5>
                {loading ? (
                  <TextBlock
                    delay
                    showLoadingAnimation
                    rows={1}
                    style={{
                      width: 700,
                      height: 60,
                      marginLeft: 15,
                      marginTop: 15
                    }}
                    color="#f0f0f0"
                  />
                ) : (
                  <p className="list ml-4">{item.title}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function Topup() {
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
                    <b>How to Topup</b>
                  </h6>
                  <br />
                </div>
                <TopupData />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
