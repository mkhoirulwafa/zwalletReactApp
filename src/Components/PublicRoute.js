import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginAs } from "../Utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogin } = useSelector((s) => s.Auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          loginAs() ? (
            <Redirect to="/admin" />
          ) : (
            <Redirect to="/dashboard" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
