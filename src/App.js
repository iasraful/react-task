import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import CardDetails from "./Components/CardDetalis/CardDetails";
import Body from "./Components/Body/Body";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="/details/:name">
          <CardDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
