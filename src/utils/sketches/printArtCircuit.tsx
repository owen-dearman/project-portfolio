import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class PrintArtCircuit extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    const randArr = [1, 2, 3, 4];
    const palette = ["#005f6b", "#008c9e", "#00b4cc", "#00dffc"];
    const gapsize = 25;

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
        for (let column = 0; column < height; column += gapsize) {
          const r = p.random(randArr);
          drawLines(row, column, r);
          p.stroke("yellow");
          p.strokeWeight(3);
          p.noFill();
          if (r % 2 === 0) {
            p.circle(row, column, gapsize / 2);
          }
        }
      }
    }

    const drawLines = (row: number, column: number, r: number) => {
      p.stroke(p.random(palette));
      p.strokeWeight(5);
      if (r === 1) {
        p.line(row, column, row + gapsize, column + gapsize);
      } else if (r === 2) {
        p.line(row + gapsize, column, row, column + gapsize);
      } else if (r === 3) {
        p.line(row + gapsize / 2, column, row + gapsize / 2, column + gapsize);
      } else if (r === 4) {
        p.line(row, column + gapsize / 2, row + gapsize, column + gapsize / 2);
      }
    };

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

export default PrintArtCircuit;
