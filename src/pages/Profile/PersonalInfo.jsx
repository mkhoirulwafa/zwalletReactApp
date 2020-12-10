import React, { useEffect } from "react";
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
// import { Link } from "react-router-dom";
// import { getUsers } from "./../../redux/actions/Users";
import { useHistory } from "react-router-dom";
import API from "../../Services";

const Detail = (props) => {
  const history = useHistory()
  const [dataUser, setDataUser] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  // const { data, loading } = useSelector((s) => s.Users);
  const {data} = useSelector((s) => s.Auth);


  useEffect(() => {
    API.Profile(data?.token, data?.id).then((res)=>{
      setDataUser(res)
    })
  }, [dispatch, data]);
  let details = [
    {
      id:0,
      title: "First Name",
      value: dataUser?.firstName,
      trailing: false,
    },
    {
      id:1,
      title: "Last Name",
      value: dataUser?.lastName,
      trailing: false,
    },
    {
      id:2,
      title: "Verified E-mail",
      value: dataUser?.email,
      trailing: false,
    },
    {
      id:3,
      title: "Phone Number",
      value: `+${dataUser?.phone}`,
      trailing: true,
    },
  ];
  return details.map((item) => {
    return (
      <div className="row mt-3" key={item.id}>
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
                      history.push({
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

export default function PersonalInfo(props) {
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
                    <b> Personal Information </b>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-6 ml-1 mt-3">
                    <Descript
                      id="dark"
                      className="description mt-3"
                      content="We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support."
                    />
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row">
                  <div className="col justify-content-center container">
                    <Detail />
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
