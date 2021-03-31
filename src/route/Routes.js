import { Route, Switch } from "react-router-dom";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
export default Routes;
