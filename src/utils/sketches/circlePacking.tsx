import React from "react";
import p5 from "p5";

interface circleProps {
  pos: { x: number; y: number };
  fill: string;
  radius: number;
}

interface IProps {
  name: string;
}
class CirclePacking extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    const colours = ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"];

    p.setup = () => {
      p.createCanvas(width, height);
      p.background(0);
      p.loop();
      p.frameRate(1);
    };

    p.draw = () => {
      p.background(0);
      const circlesArray = calculatePackedCircles(50000);
      for (const c of circlesArray) {
        p.noStroke();
        p.fill(c.fill);
        p.circle(c.pos.x, c.pos.y, c.radius * 2);
      }
    };

    function calculatePackedCircles(numCircles: number) {
      const validatedCircles: circleProps[] = [];
      for (let i = 0; i <= numCircles; i++) {
        const circleSpec = {
          pos: {
            x: p.random(width),
            y: p.random(height),
          },
          radius: p.abs(p.randomGaussian(100, 50)),
          fill: p.random(colours),
        };

        const checkExistingCircles = (
          existingCircle: circleProps,
          circleSpec: circleProps
        ) => {
          const radiusSum = existingCircle.radius + circleSpec.radius;
          const distanceBetweenCircles = p.dist(
            existingCircle.pos.x,
            existingCircle.pos.y,
            circleSpec.pos.x,
            circleSpec.pos.y
          );
          return distanceBetweenCircles > radiusSum;
        };
        if (
          validatedCircles.every((existingCircle) =>
            checkExistingCircles(existingCircle, circleSpec)
          )
        ) {
          validatedCircles.push(circleSpec);
        }
      }
      return validatedCircles;
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

export default CirclePacking;
