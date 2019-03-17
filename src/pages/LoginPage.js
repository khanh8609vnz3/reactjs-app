import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Khanh",
      age: 24
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputName, event) {
    this.setState({ [inputName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const data = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-name"
            label="Name"
            value={data.name}
            onChange={e => this.handleChange("name", e)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-age"
            label="Age"
            value={data.age}
            onChange={e => this.handleChange("age", e)}
            margin="normal"
            variant="outlined"
            type="number"
          />
          <h3>
            My name is {data.name} and I'm {data.age} years old
          </h3>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
