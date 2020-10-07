import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
// import Balance from './Components/Balance'
//style
import "../src/css/style.css";
import "./src/css/transfer.css";

const Receiver = (props) => {
  let [receiver, setReceiver] = React.useState([]);
  // let [people, setPeople] = React.useState(props);
  // let [key, setKey] = React.useState(props.key);
  //key belum keambil:(

  React.useEffect(() => {
    Axios(
      {
        method: "get",
        url: `http://localhost:8000/${
          !props.key ? "users" : `transfer?search=${props.key}`
        }`,
      },
      [props.key]
    )
      .then((res) => {
        let data = res.data.data;
        setReceiver(data);
      })
      .catch((err) => {
        setReceiver(err.message);
      });
  });
  return receiver.map((item) => {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-12 mb-3">
            <div className="card border-0">
              <Link
                to="/input-amount"
                // onClick={() =>
                //   setPeople({
                //     img: item.avatar,
                //     name: item.fullName,
                //     phone: item.phone,
                //   })
                // }
              >
                <div className="container">
                  <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-1">
                      <img src={item.avatar} alt="" />
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-11 pl-5 pl-sm-5 pt-1">
                      <p>
                        <b>{item.fullName}</b>
                      </p>
                      <p className="small">{item.phone}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
};

class Transfer extends React.Component {
  state = {
    key: "",
  };
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row mr-5 ml-5">
            <SideNav />
            <div className="col-12 col-sm-10 col-md-8 col-lg-9">
              <div className="container card min-vh-100">
                <div className="container">
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
                      onChange={(e) => {
                        this.setState({ key: e.target.value });
                        console.log(this.state.key);
                      }}
                      type="text"
                      placeholder="Search receiver here"
                    />
                  </div>
                  <Receiver key={this.state.key} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Transfer;
