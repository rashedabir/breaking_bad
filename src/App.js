import "./App.css";
import Users from "./screens/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserDetails from "./screens/UserDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/user/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
