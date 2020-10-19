import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, loginAs } from "../Utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
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
