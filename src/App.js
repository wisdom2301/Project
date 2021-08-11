import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';


function App() {
  return (
    <Router>
    <main className="App">
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav> */}


      <Switch>
        
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
    </Router>
  


  );
}

export default App;
