import React, { Component } from "react";
import "./App.css";

const HEIGHT = 500;
const WIDTH = 800;
const PIPE_WIDTH = 50;
const MIN_PIPE_HEIGHT = 40;

class Pipe {
  constructor(ctx, height, spaceBetweenPipes) {
    this.ctx = ctx;
    this.x = 50;
    this.y = height ? HEIGHT - height : 0;
    this.width = PIPE_WIDTH;
    this.height =
      height ||
      MIN_PIPE_HEIGHT +
        Math.random() * (HEIGHT - spaceBetweenPipes - MIN_PIPE_HEIGHT * 2);
  }

  draw() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //this.ctx.fillRect(WIDTH,firstPipeHeight + spaceBetweenPipes,PIPE_WIDTH,secondPipeHeight);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    //var canvas = document.getElementById("myCanvas");
    var ctx = this.canvasRef.current.getContext("2d");

    const spaceBetweenPipes = 80;
    const firstPipe = new Pipe(ctx, null, spaceBetweenPipes);
    const secondPipeHeight = HEIGHT - firstPipe.height - spaceBetweenPipes;
    const secondPipe = new Pipe(ctx, secondPipeHeight, 80);

    this.pipes = [firstPipe, secondPipe];
    setInterval(this.gameLoop, 1000 / 60);
  }

  gameLoop = () => {
    this.update();
    this.draw();
  };

  update = () => {};

  draw() {
    this.pipes.forEach(pipe => pipe.draw());
  }

  render() {
    return (
      <div className="App">
        <canvas
          ref={this.canvasRef}
          width={WIDTH}
          height={HEIGHT}
          style={{ marginTop: "24px", border: "1px solid #c3c3c3" }}
        >
          Your browser doesn't support the` canvas element
        </canvas>
      </div>
    );
  }
}

export default App;
