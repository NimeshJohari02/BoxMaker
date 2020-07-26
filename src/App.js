import React, { Component } from "react";
import "./app.css";
import BoxList from "./list";
class App extends Component {
  render() {
    return (
      <div className="Form">
        {/*//   <Box background="purple" height={25} width={80} />*/}
        <BoxList />
      </div>
    );
  }
}

export default App;
