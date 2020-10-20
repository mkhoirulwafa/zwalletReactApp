import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./../../../redux/actions/Users";
import { Link } from "react-router-dom";

//components
import Button from "./Button";
import IncomeExpense from "./IncomeExpense";
import { TextBlock } from "react-placeholder/lib/placeholders";

import "react-placeholder/lib/reactPlaceholder.css";

const Balance = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);

  useEffect(() => {
    dispatch(
      getUsers({
        id: Auth.data.id,
        token: Auth.data.token,
      })
    );
  }, [dispatch, Auth.data.id, Auth.data.token]);

  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-9">
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
                (data.balance === '') ? `Rp 0-,` : `Rp${data.balance}`
              )}
            </b>
            </h2>
            <br />
            <h6>
              {data.phone === "" ? (
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
                `+${data.phone}`
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
