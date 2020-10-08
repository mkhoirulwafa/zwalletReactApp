import React from "react";

//components
import Nav from '../../Components/Nav'
import SideNav from '../../Components/SideNav'
import Footer from '../../Components/Footer'
import Balance from './Components/Balance'
//style
import "../src/css/style.css";
import "./src/css/home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row mr-5 ml-5 min-vh-100">
            <SideNav />
            <Balance />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
