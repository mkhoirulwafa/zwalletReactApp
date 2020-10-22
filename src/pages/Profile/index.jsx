import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";

//styling
import "../Topup/src/css/topup.css";
import { useHistory } from "react-router-dom";
import { getUsers } from "./../../redux/actions/Users";
import ButtonModal from "./Components/ModalUpload";

const ProfileData = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  useEffect(() => {
    dispatch(
      getUsers({
        id: Auth.data.id,
        token: Auth.data.token,
      })
    );
  }, [dispatch, Auth.data.id, Auth.data.token]);
  console.log(data);

  return (
    <div className="row text-center mt-5">
      <div className="col-sm-12 col-md-12">
        <div className="row mb-3">
          <div className="m-auto">
            <img
              src={
                loading ? (
                  <RectShape
                    delay
                    showLoadingAnimation
                    style={{ width: 75, height: 75, borderRadius: 10 }}
                    color="#f0f0f0"
                  />
                ) : (
                  data.avatar
                )
              }
              alt=""
              className="m-auto rounded"
              width="70px"
            />
            <br />
          </div>
        </div>
        <div className="row ">
          <ButtonModal/>
        </div>
        <div className="row ">
          <h6 className="m-auto">
            <b>
              {loading ? (
                <TextBlock
                  delay
                  showLoadingAnimation
                  rows={1}
                  style={{
                    height: 20,
                    width: 60,
                    marginTop: 10,
                  }}
                  color="#f0f0f0"
                />
              ) : (
                data.firstName + " " + data.lastName
              )}
            </b>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default function Profile() {
  let history = useHistory();
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card min-vh-100">
              <div className="container">
                <ProfileData />
                <div className="row text-center mt-5">
                  <div className="col-sm-12 offset-md-2 col-md-8 text-center">
                    <div className="row mb-3">
                      <button
                        onClick={() => history.replace("/profile/personal")}
                        className="btn btn-lg btn-block second text-left p-3"
                      >
                        <b>Personal Information</b>
                      </button>
                    </div>
                    <div className="row mb-3">
                      <button
                        onClick={() => history.replace("/profile/change-password")}
                        className="btn btn-lg btn-block second text-left p-3"
                      >
                        <b>Change Password</b>
                      </button>
                    </div>
                    <div className="row mb-3">
                      <button
                        onClick={() => history.replace("/profile/change-pin")}
                        className="btn btn-lg btn-block second text-left p-3"
                      >
                        <b>Change PIN</b>
                      </button>
                      <span></span>
                    </div>
                    <div className="row mb-3">
                      <button
                        onClick={() => history.replace("/")}
                        className="btn btn-lg btn-block second text-left p-3"
                      >
                        <b>Logout</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
