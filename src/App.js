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
    // let button;
    // if (isLogin) {
    //   button = (
    //     <div>
    //       <Button onClick={this.logout}>Logout</Button>
    //     </div>
    //   );
    // } else {
    //   button = (
    //     <div>
    //       <Button onClick={this.login}>Login</Button>
    //     </div>
    //   );
    // }

    return (
      <div>
        {/* {isLogin && <h3>Da login rui nha</h3>}
        {!isLogin && <h3>Chua login nha</h3>} */}
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
        {/* {button} */}
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
