import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import{app} from './firebase';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
          <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
          <Header />
            <Checkout />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
