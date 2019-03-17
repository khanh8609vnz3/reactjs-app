import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "Khanh",
        age: 24,
        job: "No Job"
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputName, event) {
    this.setState({ [inputName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formData));
  }

  render() {
    const data = this.state.formData;

    return (
      <div id="login-page">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="inputName"
            className="form-control"
            value={data.name}
            onChange={e => this.handleChange("name", e)}
          />
          <input
            type="text"
            name="age"
            id="inputAge"
            className="form-control"
            value={data.age}
            onChange={e => this.handleChange("age", e)}
          />
          <select
            name="job"
            id="selectJob"
            className="form-control"
            onChange={e => this.handleChange("job", e)}
            value={data.job}
          >
            <option value="No Job">No Job</option>
            <option value="IT">IT</option>
            <option value="Osin">Osin</option>
          </select>
          <h5>
            My name is {data.name} and I'm {data.age} years old. I'm a{" "}
            {data.job}.
          </h5>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
