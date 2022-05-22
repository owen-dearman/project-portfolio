import React from "react";
import p5 from "p5";

interface circleProps {
  fill: string;
  aX: number;
  bX: number;
  aY: number;
  bY: number;
}

interface IProps {
  name: string;
}
class SymmetryX4 extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const coloursArr = ["#cc0c39", "#e6781e", "#c8cf02", "#f8fcc1", "#1693a7"];
    const circleStore: circleProps[] = [];

    p.setup = () => {
      p.createCanvas(width, height);
    };

    p.draw = () => {
      p.background(10);
      createCircles();
      drawCircles();
    };

    const drawCircles = () => {
      for (const c of circleStore) {
        p.noStroke();
        p.fill(c.fill);
        p.circle(c.aX, c.aY, 30);
        p.circle(c.bX, c.aY, 30);
        p.circle(c.aX, c.bY, 30);
        p.circle(c.bX, c.bY, 30);
      }
      if (circleStore.length > 300) {
        circleStore.shift();
      }
    };

    const createCircles = () => {
      const circles = {
        fill: p.random(coloursArr),
        aX: p.mouseX,
        bX: width - p.mouseX,
        aY: p.mouseY,
        bY: height - p.mouseY,
      };
      circleStore.push(circles);
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

export default SymmetryX4;
