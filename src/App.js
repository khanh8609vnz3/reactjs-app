import React, { Component } from "react";
import Header from "./components/Header";
import ListItem from "./pages/ListItem";
import LoginPage from "./pages/LoginPage";
import "./App.css";

class App extends Component {
  textValue = "Day la text";
  render() {
    return (
      <div className="App">
        <Header />
        <LoginPage />
        {/* <ListItem /> */}
      </div>
    );
  }
}

export default App;
