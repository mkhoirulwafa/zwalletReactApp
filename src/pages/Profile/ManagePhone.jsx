import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

//styling
import "../Topup/src/css/topup.css";
import { TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";
import Descript from "../login/src/components/Description";
import { Link } from "react-router-dom";
import { getUsers } from "./../../redux/actions/Users";
import { useHistory } from "react-router-dom";

const Phone = (props) => {
  const dispatch = useDispatch();
  console.log(props)

  const Auth = useSelector((s) => s.Auth);
  const { data, loading } = useSelector((s) => s.Users);

  useEffect(() => {
    dispatch(
      getUsers({
        token: Auth.data.token,
        id: Auth.data.id,
      })
    );
  }, [Auth.data.token, Auth.data.id, dispatch]);
  let details = [
    {
      title: "First Name",
      value: data.firstName,
      trailing: false,
    },
    {
      title: "Last Name",
      value: data.lastName,
      trailing: false,
    },
    {
      title: "Verified E-mail",
      value: data.email,
      trailing: false,
    },
    {
      title: "Phone Number",
      value: `+${data.phone}`,
      trailing: true,
    },
  ];
  return details.map((item) => {
    return (
      <div className="row mt-3">
        <div className="col card border-0">
          <div className="container col-12 mb-2 mt-n2">
            <div className="row">
              <div className="col-10">
                {loading ? (
                  <TextBlock
                    delay
                    showLoadingAnimation
                    rows={1}
                    style={{
                      width: 100,
                      height: 20,
                    }}
                    color="#f0f0f0"
                  />
                ) : (
                  <p>{item.title}</p>
                )}
                <h6>
                  {loading ? (
                    <TextBlock
                      delay
                      showLoadingAnimation
                      rows={1}
                      style={{
                        width: 200,
                        height: 20,
                      }}
                      color="#f0f0f0"
                    />
                  ) : (
                    <b>{item.value}</b>
                  )}
                </h6>
              </div>
              <div className="col-2 mt-3">
                {!item.trailing ? (
                  ""
                ) : loading ? (
                  <TextBlock
                    delay
                    showLoadingAnimation
                    rows={1}
                    style={{
                      width: 100,
                      height: 20,
                    }}
                    color="#f0f0f0"
                  />
                ) : (
                    <button
                    type="submit"
                    onClick={() =>
                      props.history.push({
                        pathname: "/profile/phone",
                        input: item.phone
                      })
                    }
                    className="btn second btn-lg text-black-50"
                  >
                    Manage
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default function ManagePhone(props) {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <SideNav />
          <div className="col">
            <div className="container card min-vh-100 min-vw-70">
              <div className="container">
                <div className="row main-title mt-3 ml-2">
                  <h6>
                    <b> Manage Phone Number </b>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-6 ml-1 mt-3">
                    <Descript
                      id="dark"
                      className="description mt-3"
                      content="You can only delete the phone number and then you must add another phone number."
                    />
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row">
                  <div className="col justify-content-center container">
                    <Phone {...props} />
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
