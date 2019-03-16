import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./App.css";

class App extends Component {
  textValue = "Day la text";
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Khanh"
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
      console.log(this.state);
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  changeName(e) {
    console.log(this);
  }

  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <h4>{this.state.name}</h4>
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
        />
        <Button onClick={event => this.changeName(event)}>Change name</Button>
      </div>
    );
  }
}

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20"
        },
        {
          id: 2,
          name: "Bar",
          age: "30"
        },
        {
          id: 3,
          name: "Baz",
          age: "40"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <div key={item.id} className="blue">
            <span>{item.id} </span>
            <span>{item.age} </span>
            <span>{item.name} </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
