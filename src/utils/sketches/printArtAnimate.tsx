import React from "react";
import p5 from "p5";

interface linesProps {
  colour: string;
  angle: number;
  spin: number;
  direction: number;
  middleBoxX: number;
  middleBoxY: number;
}

interface IProps {
  name: string;
}
class PrintArtAnimate extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = 600;
    let height = 600;
    let lines: linesProps[] = [];
    const randArr = [1, 2];
    let index = 1;
    const palette1 = ["#a1dbb2", "#fee5ad", "#faca66", "#f7a541", "#f45d4c"];
    const palette2 = ["#ccf390", "#e0e05a", "#f7c41f", "#fc930a", "#ff003d"];
    const palette3 = ["#82837e", "#94b053", "#bdeb07", "#bffa37", "#e0e0e0"];
    const palette4 = ["#046d8b", "#309292", "#2fb8ac", "#93a42a", "#ecbe13"];
    const palette5 = ["#b6d8c0", "#c8d9bf", "#dadabd", "#ecdbbc", "#fedcba"];
    const palettes = [palette1, palette2, palette3, palette4, palette5];

    p.setup = () => {
      p.createCanvas(width, height);
      createPattern();
    };

    p.draw = () => {
      p.background(10);
      lines.forEach(drawLine);
    };

    function createPattern() {
      for (let row = 0; row < 30; row++) {
        for (let column = 0; column < 30; column++) {
          createLine(row * 20, column * 20);
        }
      }
    }

    function createLine(pointA: number, pointC: number) {
      const details = {
        colour: p.random(palettes[0]),
        angle: 0,
        spin: p.random(0.01, 0.1),
        direction: p.random(randArr),
        middleBoxX: pointA + 10,
        middleBoxY: pointC + 10,
      };
      lines.push(details);
    }

    function drawLine(l: linesProps) {
      p.push();
      p.translate(l.middleBoxX, l.middleBoxY);
      p.strokeWeight(5);
      p.strokeCap(p.SQUARE);
      p.stroke(l.colour);
      p.rotate(l.angle);
      if (l.direction === 1) {
        p.line(-10, 0, 10, 0);
        l.angle += l.spin;
      } else {
        p.line(0, -10, 0, 10);
        l.angle -= l.spin;
      }
      p.pop();
    }

    p.keyTyped = () => {
      switch (p.key) {
        case " ":
          lines = [];
          p.background(10);
          createPattern();
          break;
        case "z":
          lines.forEach((l) => (l.colour = p.random(palettes[index % 5])));
          index++;
          break;
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

export default PrintArtAnimate;
