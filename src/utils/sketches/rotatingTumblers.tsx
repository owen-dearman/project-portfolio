import React from "react";
import p5 from "p5";

interface tumblerProps {
  colour: string;
  diameter: number;
  angle: number;
  spin: number;
  picker: number;
}

interface IProps {
  name: string;
}
class RotatingTumblers extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = 600;
    let height = 600;
    let tumblers: tumblerProps[] = [];
    const palette = ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"];
    const pickerArray = [1, 2];

    p.setup = () => {
      p.createCanvas(width, height);
      createTumblers();
    };

    p.draw = () => {
      p.background(0);
      p.translate(width / 2, height / 2);
      tumblers.forEach(drawTumbler);
    };

    function createTumblers() {
      for (let i = 50; i < 600; i += 50) {
        const x = {
          colour: p.random(palette),
          diameter: i,
          angle: 0,
          spin: p.random(0.0075, 0.02),
          picker: p.random(pickerArray),
        };
        tumblers.push(x);
      }
    }

    function drawTumbler(x: tumblerProps) {
      p.stroke(x.colour);
      p.strokeWeight(15);
      p.strokeCap(p.SQUARE);
      p.noFill();
      p.rotate(x.angle);
      if (x.picker === 1) {
        x.angle += x.spin;
      } else {
        x.angle -= x.spin;
      }
      p.arc(0, 0, x.diameter, x.diameter, 2, 7.5);
    }

    p.keyTyped = () => {
      switch (p.key) {
        case " ":
          tumblers = [];
          createTumblers();
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

export default RotatingTumblers;
