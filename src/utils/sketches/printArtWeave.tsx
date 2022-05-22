import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class PrintArtWeave extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const randArr = [1, 2];
    const palette = ["#f8b195", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"];
    const gapsize = 15;

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
        p.strokeWeight(5);
        if (r === 1) {
          p.line(
            row + gapsize / 2,
            column,
            row + gapsize / 2,
            column + gapsize
          );
        } else if (r === 2) {
          p.line(
            row,
            column + gapsize / 2,
            row + gapsize,
            column + gapsize / 2
          );
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

export default PrintArtWeave;
