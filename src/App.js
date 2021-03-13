import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails"

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/league_detail/:id">
          <LeagueDetails />
        </Route>
     
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
