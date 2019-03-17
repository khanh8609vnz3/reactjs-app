import React, { Component } from "react";

class ListItem extends Component {
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

export default ListItem;
