import { Route, useHistory } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (false) {
          return <Component {...props} />;
        } else {
          history.push("/");
        }
      }}
    />
  );
};
