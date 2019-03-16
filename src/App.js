import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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
      name: "Khanh",
      isLogin: false
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isLogin: true });
  }

  logout() {
    this.setState({ isLogin: false });
  }

  render() {
    const isLogin = this.state.isLogin;
    return (
      <div>
        {isLogin ? (
          <div>
            <h3>Da login rui nha</h3>
            <Button onClick={this.logout}>Logout</Button>
          </div>
        ) : (
          <div>
            <h3>Chua login nha</h3>
            <Button onClick={this.login}>Login</Button>
          </div>
        )}
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
    const data = this.state.data;
    let listData;

    listData = data.map(item => {
      return (
        <div key={item.id} className="blue">
          <span>{item.id} </span>
          <span>{item.age} </span>
          <span>{item.name} </span>
        </div>
      );
    });

    return <div>{listData}</div>;
  }
}

export default App;
