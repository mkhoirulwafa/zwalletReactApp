import React from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

//components
import Nav from "../../Components/Nav";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";
//style
import "../src/css/style.css";
import "./src/css/inputAmount.css";

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

const Main = (props) => {
  const [amount, setAmount] = React.useState("");
  const [balance, setBalance] = React.useState(120000);
  const [notes, setNotes] = React.useState("");
  const [data, setData] = React.useState([]);

  const {
    location: { receiver },
  } = props;

  React.useEffect(() => {
    Axios.get(`http://localhost:8000/api/v1/users`, {
      params: { id: 7 },
    })
      .then((res) => {
        // console.log(res.data);
        const data = res.data.data[0];
        setData(data);
        setBalance(data.balance);
      })
      .catch((err) => {
        setData(err.message);
      });
  }, []);

  //Validasi Number & Set to Amount
  const handleChange = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = "";
    } else {
      setAmount(e.target.value);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mr-5 ml-5">
          <SideNav />
          <div className="col-xs-11 col-sm-9 col-md-9">
            <div className="container card">
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
                <div className="row mt-2 mb-2">
                  <div className="col-sm-12 col-md-6">
                    <p className="secondary">
                      Type the amount you want to transfer and then press
                      continue to the next steps.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 mb-2">
                    <h1 className="text-center secondary">
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="amount input-amount text-center border-none"
                        type="text"
                        placeholder="0.00"
                        maxLength="14"
                      />
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 mb-2">
                    <p className="text-center">
                      <b>Rp{balance - amount} Available</b> {/*  BALANCE */}
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <div className="col-sm-12 col-md-6 mb-2">
                    <div className="search input mt-3 bg-transparent">
                      <span className="icon-search"></span>
                      <input
                        id="text"
                        type="text"
                        placeholder="Add some notes.."
                        onChange={(e) => setNotes(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-12 offset-md-9 col-md-3 mt-2">
                    <div className="border-0">
                      <div className="container mb-2 mt-n2 btn primary">
                        <Link to="/confirmation">
                          <button
                            type="submit"
                            onClick={() =>
                              props.history.push({
                                pathname: "/confirmation",
                                receiver: {...receiver},
                                input: {
                                  amount: amount,
                                  notes: notes,
                                  balance: (balance-amount),
                                  profileData: data,
                                }
                              })
                            }
                            className="btn btn-lg text-white"
                          >
                            Continue
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InputAmount = (props) => {
  let history = useHistory()
  !props.location.receiver && history.replace("/transfer");
  return (
    <>
      <Nav />
      <Main {...props}/>
      <Footer />
    </>
  );
}

export default InputAmount;