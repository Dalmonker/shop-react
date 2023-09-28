import React, { Component } from "react";
import List from "./List";

export class Lists extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <List key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Lists;
