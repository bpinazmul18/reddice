import { Route, Switch } from "react-router-dom";
import SignUp from "../Components/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};
export default Routes;
