import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class PrintArtDiagonalSquare extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    const randArr = [1, 2];
    const palette = ["#fdf1cc", "#c6d6b8", "#987f69", "#e3ad40", "#fcd036"];
    const gapsize = 20;

    p.setup = () => {
      p.createCanvas(width, height);
      p.background(0);
      p.noLoop();
    };

    p.draw = () => {
      drawGrid();
    };

    function drawGrid() {
      for (let column = 0; column < height; column += gapsize) {
        p.stroke(p.random(palette));
        for (let row = 0; row < width; row += gapsize) {
          drawLines(row, column);
        }
      }

      function drawLines(row: number, column: number) {
        const r = p.random(randArr);
        p.strokeWeight(3);
        if (r === 1) {
          p.line(row, column, row + gapsize, column + gapsize);
        } else if (r === 2) {
          p.line(row + gapsize, column, row, column + gapsize);
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

export default PrintArtDiagonalSquare;
