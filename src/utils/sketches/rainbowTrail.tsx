import React from "react";
import p5 from "p5";

interface IProps {
  name: string;
}
class RainbowTrail extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    let amDrawing = false;
    const rainbowColours = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#9400D3",
    ];

    p.setup = () => {
      p.createCanvas(width, height);
      p.background("#ADD8E6");
    };

    p.draw = () => {
      if (amDrawing) {
        let yValue = p.mouseY;
        p.noStroke();
        for (const col of rainbowColours) {
          p.fill(col);
          p.square(p.mouseX - 10, yValue, 20);
          p.square(p.mouseX + 10, yValue, 20);
          yValue += 20;
        }
      }
    };

    p.keyTyped = () => {
      switch (p.key) {
        case " ":
          p.background("#ADD8E6");
          break;
        case "d":
          amDrawing = !amDrawing;
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

export default RainbowTrail;
