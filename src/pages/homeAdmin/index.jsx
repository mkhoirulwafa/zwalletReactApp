import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
import Balance from "./Components/Balance";
//style
import "../src/css/style.css";
import "./src/css/home.css";
// import { loginAs } from "../../Utils";
// import { Axios } from 'axios';

const AdminHome = () => {
  
  useEffect(()=>{
    if (localStorage.getItem("as") === '1230942') {
      return <Redirect to='/dashboard' />
    }
  })

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
};

export default AdminHome;
