import React from "react";
// import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
import ButtonPinModal from "./Components/Modal";
import Detail from "./Components/Details";

const Receiver = (props) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 mb-3">
        <div className="card border-0">
          <div className="container">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 col-lg-1">
                <img src={props.img} alt="" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-11 pl-5 pl-sm-5 pt-1">
                <p>
                  <b>{props.name}</b>
                </p>
                <p className="small">{`+62 ${props.phone}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = (props) => {
  // const [transferDate, setTransferDate] = React.useState(
  //   Date.local().toFormat("DD - hh.mm")
  // );

  const {
    location: { receiver },
  } = props;
  
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
                    <b>Transfer to</b>
                  </h6>
                  <br />
                </div>
                <Receiver
                  img={receiver.avatar}
                  name={receiver.name}
                  phone={receiver.phone}
                />
                <div class="row main-title mt-2 mb-2">
                  <h6>
                    <b>Detail</b>
                  </h6>
                  <br />
                </div>
                <Detail />
                <div className="row mt-3">
                  <div className="col-sm-12 offset-md-9 col-md-3 mt-2">
                    <div className="border-0">
                      <div className="container mb-2 mt-n2 btn primary">
                        <ButtonPinModal />
                      </div>
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
};

const Confirmation = (props) => {
  return (
    <>
      <Nav />
      <Content {...props}/>
      <Footer />
    </>
  );
};

export default Confirmation;
