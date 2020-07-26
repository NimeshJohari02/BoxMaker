import React, { Component } from "react";

class Box extends Component {
  handleClick = (evt) => {
    this.props.RemoveBox(this.props.id);
  };
  render() {
    return (
      <div>
        <div
          style={{
            background: `${this.props.background}`,
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
          }}
        ></div>
        <button onClick={this.handleClick}>Delete </button>
      </div>
    );
  }
}
export default Box;
