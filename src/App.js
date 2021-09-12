import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Trains from "./components/Trains";
import Payment from "./components/Payment";
import MoreInfo from "./components/MoreInfo";
import Profile from "./components/Profile";
import Ticket from "./components/Ticket";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/create" component={CreateAccount}/>

          <ProtectedRouter path="/trains" component={Trains} />
          <ProtectedRouter exact path="/moreInfo" component={MoreInfo}/>
          <ProtectedRouter exact path="/profile" component={Profile}/>
          <ProtectedRouter exact path="/payment" component={Payment}/>
          <ProtectedRouter exact path="/ticket" component={Ticket}/>
          <Route path="*">
            <h1 style={{ marginTop: "250px" }}>404 Page</h1>
            <a href="/" style={{ color: "white" }}>
              Return to login page
            </a>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
