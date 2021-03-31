import { Component } from "react";
import NavigationBar from "./Components/NavigationBar";
import Routes from "./route/Routes";

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <NavigationBar />
        <Routes />
      </div>
    );
  }
}

export default App;
