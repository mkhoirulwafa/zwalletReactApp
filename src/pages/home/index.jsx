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
          <div className="row min-vh-70 min-vw-70 mx-auto">
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
