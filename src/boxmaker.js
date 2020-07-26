import React, { Component } from "react";
import uuid from "uuid/v4";

class Boxmaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: " ",
      background: " ",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const newbox = { ...this.state, id: uuid() };
    this.props.Addbox(newbox);
    this.setState({ height: "", width: " ", background: " " });
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Form">
          <label htmlFor="Height">Height Of Box</label>
          <input
            type="text"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
          />
        </div>
        <div className="Form">
          <label htmlFor="Width">Width Of Box</label>
          <input
            type="text"
            value={this.state.width}
            name="width"
            onChange={this.handleChange}
          />
        </div>
        <div className="Form">
          <label htmlFor="background">Color Of Box</label>
          <input
            type="text"
            value={this.state.background}
            name="background"
            onChange={this.handleChange}
          />
        </div>
        <button className="btn">Submit !!</button>
      </form>
    );
  }
}

export default Boxmaker;
