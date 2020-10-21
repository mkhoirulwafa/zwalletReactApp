import React from "react";

//components
import Nav from '../../Components/Nav'
import SideNav from '../../Components/SideNav'
import Footer from '../../Components/Footer'
import HistoryItems from '../home/Components/HistoryItem'

//style
import "../src/css/style.css";
import "./src/css/history.css";

class History extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row mr-5 ml-5">
            <SideNav />
            <div className="col-12 col-sm-10 col-md-8 col-lg-9 min-vh-100">
                <div className="container card min-vh-100">
                    <div className="container">
                        <div className="row main-title mt-3">
                            <h6><b>Transaction History</b></h6> <br/>
                        </div>
                        <div className="row secondary">
                            <h6>This Week</h6>
                        </div>
                        <HistoryItems start='0' end='2'/>
                        <div className="row secondary">
                            <h6>This Month</h6>
                        </div>
                        <HistoryItems start='2' end='4'/>
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

export default History;
