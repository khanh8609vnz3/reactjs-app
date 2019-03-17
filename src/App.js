import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/LoginPage";
class App extends Component {
  textValue = "Day la text";
  render() {
    return (
      <BrowserRouter>
        <div className="Menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
