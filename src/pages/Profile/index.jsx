import React from "react";
import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
// import TopupData from './Components/TopupData'

//styling
import "../Topup/src/css/topup.css";

class ProfileData extends React.Component {
  state = {
    data: [],
    number: "",
    title: "",
    description: "",
  };

  componentDidMount() {
    Axios.get(`https://zwallet-api-wafa.herokuapp.com/profile`, { params: { id: 7 } }).then(
      (res) => {
        console.log(res.data);
        const data = res.data.data;
        this.setState({ data });
      }
    );
    Axios({
      method: "post",
      url: `https://zwallet-api-wafa.herokuapp.com/topup`,
      data: {
        number: this.state.number,
        title: this.state.title,
        description: this.state.description,
      },
    });
  }

  render() {
    return this.state.data.map((item) => {
      return (
        <div class="row text-center mt-5">
          <div class="col-sm-12 col-md-12">
            <div class="row mb-3">
              <div class="m-auto">
                <img src={item.avatar} alt="" class="m-auto" width="70px" />
                <br />
              </div>
            </div>
            <div class="row ">
              <p class="m-auto small">
                <p>Edit</p>
              </p>
            </div>
            <div class="row ">
              <h6 class="m-auto">
                <b>{item.fullName}</b>
              </h6>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default function Profile() {
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
                <div class="row text-center mt-5">
                  <div class="col-sm-12 offset-md-2 col-md-8 text-center">
                    <div class="row mb-3">
                      <button className="btn btn-lg btn-block second text-left p-3"><b>Personal Information</b></button>
                    </div>
                    <div class="row mb-3">
                      <button className="btn btn-lg btn-block second text-left p-3"><b>Change Password</b></button>
                    </div>
                    <div class="row mb-3">
                      <button className="btn btn-lg btn-block second text-left p-3"><b>Change PIN</b></button>
                      <span></span>
                    </div>
                    <div class="row mb-3">
                      <button className="btn btn-lg btn-block second text-left p-3"><b>Logout</b></button>
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
