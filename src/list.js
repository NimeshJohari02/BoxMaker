import React, { Component } from "react";
import Box from "./box";
import Boxmaker from "./boxmaker";
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   boxes:[{width:10 ,height:40,background:'pink'}]
      boxes: [],
    };
    this.RemoveBox = this.RemoveBox.bind(this);
  }
  AddBox = (newbox) => {
    this.setState({ boxes: [...this.state.boxes, newbox] });
  };
  RemoveBox(id) {
    //this.setState({boxes:this.state.boxes.filter(box=>box.id!==id)});
    const newboxes = this.state.boxes.filter((box) => {
      if (box.id !== id) {
        return true;
      }
    });
    this.setState({ boxes: newboxes });
  }

  render() {
    let boxes = this.state.boxes.map((el) => (
      <Box
        key={el.id}
        id={el.id}
        width={el.width}
        height={el.height}
        background={el.background}
        RemoveBox={this.RemoveBox}
      />
    ));
    return (
      <div className="box">
        <h1>Colored Box Maker Thingy </h1>
        <Boxmaker Addbox={this.AddBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
