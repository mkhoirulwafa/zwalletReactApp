import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./../../../redux/actions/Users";
import { Link } from "react-router-dom";

//components
import Button from "./Button";
import IncomeExpense from "./IncomeExpense";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";

import "react-placeholder/lib/reactPlaceholder.css";
import API from "../../../Services";

const Balance = () => {
  const dispatch = useDispatch();
  // const { data, loading } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  const [dataUser, setDataUser] = React.useState();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    API.Profile(Auth?.data?.token, Auth?.data?.id).then((res)=>{
      setDataUser(res)
    })
  }, [dispatch, Auth]);

  return (
    <div className="col col-sm col-md col-lg">
      <div className="container">
        <div className="row balance d-flex justify-content-between  h-100">
          <div className="col-6 col-sm-6 col-md-7 col-lg-9 mb-3 mt-3">
            <h5>Balance</h5>
            <h2>
              <b>
              {loading ? (
                <TextBlock
                  delay
                  showLoadingAnimation
                  rows={1}
                  style={{ width: 170, height: 44 }}
                  color="#eeeeee"
                />
              ) : (
                (dataUser?.balance === '') ? `Rp 0-,` : `Rp${dataUser?.balance}`
              )}
            </b>
            </h2>
            <br />
            <h6>
              {dataUser?.phone === "" ? (
                <Link to="add-phone" className="text-white">
                  Add your phone number
                </Link>
              ) : loading ? (
                <TextBlock
                  delay
                  showLoadingAnimation
                  rows={1}
                  style={{ width: 100 }}
                  color="#f0f0f0"
                />
              ) : (
                `+${dataUser?.phone}`
              )}
            </h6>
          </div>
          <div className="col-6 col-sm-6 col-md-5 col-lg-3 align-self-center">
            <div className="container">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <IncomeExpense />
    </div>
  );
};

export default Balance;
