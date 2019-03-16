import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <canvas
          id="myCanvas"
          width="800"
          height="500"
          style={{ marginTop: "24px", border: "1px solid #c3c3c3" }}
        >
          Your browser doesn't support the` canvas element
        </canvas>
      </div>
    );
  }
}

export default App;
