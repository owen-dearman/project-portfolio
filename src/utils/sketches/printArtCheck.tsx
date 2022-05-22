import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class PrintArtCheck extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const randArr = [1, 2, 3, 4];
    const palette = ["#8d7966", "#a8a39d", "#d8c8b8", "#e2ddd9", "#f8f1e9"];
    const gapsize = 18;

    p.setup = () => {
      p.createCanvas(width, height);
      p.background(0);
      p.noLoop();
    };

    p.draw = () => {
      drawGrid();
    };

    function drawGrid() {
      for (let row = 0; row < width; row += gapsize) {
        p.stroke(p.random(palette));
        for (let column = 0; column < height; column += gapsize) {
          drawLines(row, column);
        }
      }

      function drawLines(row: number, column: number) {
        const num = p.random(randArr);
        p.stroke(p.random(palette));
        p.strokeWeight(5);
        if (num === 1) {
          p.line(row, column, row + gapsize, column);
        } else if (num === 2) {
          p.line(row, column + gapsize, row + gapsize, column + gapsize);
        } else if (num === 3) {
          p.line(row, column, row, column + gapsize);
        } else if (num === 4) {
          p.line(row + gapsize, column, row + gapsize, column + gapsize);
        }
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      width = p.windowWidth;
      height = p.windowHeight;
    };
  };

  componentDidMount(): void {
    const node: HTMLElement | undefined =
      this.myRef.current === null ? undefined : this.myRef.current;
    this.myP5 = new p5(this.Sketch, node);
  }

  componentWillUnmount(): void {
    this.myP5.remove();
  }

  render(): JSX.Element {
    return <div ref={this.myRef}></div>;
  }
}

export default PrintArtCheck;
