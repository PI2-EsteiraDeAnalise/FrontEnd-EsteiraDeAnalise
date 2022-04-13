import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { apiIPDetector } from "./services/api";
import { useDispatch } from "react-redux";
import authAction from "./store/actions/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getNetworkData = async () => {
      let apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
      const networkData = await apiIPDetector.get("v1/?api_key=" + apiKey);

      console.log(networkData.data.ip_address);
      dispatch(
        authAction.logIn({
          token: "teste",
          ip: networkData.data.ip_address,
        })
      );
    };

    getNetworkData();
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (false) {
          return <Component {...props} />;
        } else {
          return <Component {...props} />;
          //history.push("/");
        }
      }}
    />
  );
};
