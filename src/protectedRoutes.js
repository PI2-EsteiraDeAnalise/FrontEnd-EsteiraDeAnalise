import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { apiIPDetector } from "./services/api";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  useEffect(() => {
    const getNetworkData = async () => {
      let apiKey = "1be9a6884abd4c3ea143b59ca317c6b2";
      const networkData = await apiIPDetector.get("v1/?api_key=" + apiKey);

      console.log(networkData);
    };

    getNetworkData();

    console.log("teste");
  }, []);
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
