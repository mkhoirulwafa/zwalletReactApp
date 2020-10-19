import React from "react";
import Axios from 'axios';

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
// import TopupData from './Components/TopupData'

//styling
import "./src/css/topup.css";

class TopupData extends React.Component {
    state = {
      data: [],
      number: '',
      title: '',
      description: ''
    };
  
    componentDidMount() {
      Axios.get(`http://localhost:8000/api/v1/topup`).then((res) => {
        console.log(res.data);
        const data = res.data.data;
        this.setState({ data });
      })
      Axios({
        method: 'post',
        url: `http://localhost:8000/api/v1/topup`,
        data: {
          number: this.state.number,
          title: this.state.title,
          description: this.state.description
        }
      })
    }
  
    render() {
      return this.state.data.map((item) => {
        return (
          <div className="row">
            <div className="col-sm-12 col-md-12 mb-2">
              <div className="card border-0">
                <div className="container mb-2 mt-n2">
                  <div className="row d-flex align-items-center mt-2">
                    <h5 className="active ml-2">
                      <b>{item.number}</b>
                    </h5>
                    <p className="list ml-4">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }

export default function Topup() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card min-vh-100">
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