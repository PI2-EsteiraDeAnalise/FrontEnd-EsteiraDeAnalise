import { useCallback, useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { apiIPDetector } from "./services/api";
import { useDispatch, useSelector } from "react-redux";
import authAction from "./store/actions/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.authReducer.token);
  const ipAuth = useSelector((state) => state.authReducer.ip);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getNetworkData = async () => {
      let apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
      const networkData = await apiIPDetector.get("v1/?api_key=" + apiKey);

      console.log(networkData.data.ip_address);
      dispatch(
        authAction.logIn({
          token: "",
          ip: true,
        })
      );
    };

    getNetworkData().catch(console.error);
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (ipAuth) {
          return <Component {...props} />;
        } else if (!!token) {
          return <Component {...props} />;
        } else {
          history.push("/QRCode");
        }
      }}
    />
  );
};
