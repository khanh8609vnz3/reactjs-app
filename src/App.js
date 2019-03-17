import React, { Component } from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import "./scss/app.scss";

class App extends Component {
  textValue = "Day la text";
  render() {
    return (
      <div className="App">
        <Header />
        <LoginPage />
      </div>
    );
  }
}

export default App;
