import React from "react";
import p5 from "p5";

interface wormProps {
  headPos: { x: number; y: number };
  diameter: number;
  direction: number;
}

interface segmentProps {
  pos: { x: number; y: number };
  diameter: number;
}

interface IProps {
  name: string;
}
class DaveTheWorm extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    let worm: wormProps;
    const colours = [
      "rgba(255, 255, 0, 0.3)",
      "rgba(255, 0, 0, 0.5)",
      "rgba(0, 255, 0, 0.7)",
      "rgba(0, 0, 255, 0.1)",
    ];
    let walkerBody: segmentProps[] = [];

    p.setup = () => {
      p.createCanvas(width, height);
      p.background(0);
      p.loop();
      worm = {
        headPos: {
          x: p.random(600),
          y: p.random(600),
        },
        diameter: p.random(10, 40),
        direction: p.random(270),
      };
      p.angleMode(p.DEGREES);
    };
    p.draw = () => {
      p.background(0);
      p.noStroke();
      const currentSegment = {
        pos: {
          x: worm.headPos.x,
          y: worm.headPos.y,
        },
        diameter: worm.diameter,
      };
      walkerBody.push(currentSegment);
      if (walkerBody.length === 60) {
        walkerBody.shift();
      }
      drawWalker();
      moveWalker();
    };

    const drawWalker = () => {
      p.fill(colourOfWorm(worm.headPos.x, worm.headPos.y));
      for (const segment of walkerBody) {
        p.circle(segment.pos.x, segment.pos.y, segment.diameter);
      }
    };

    const moveWalker = () => {
      worm.diameter = p.random(10, 40);
      worm.direction += p.random(-35, 35);
      const stepSize = 5;
      const stepX = stepSize * p.cos(worm.direction);
      const stepY = stepSize * p.sin(worm.direction);
      worm.headPos.x += stepX;
      worm.headPos.y += stepY;
      if (worm.headPos.x < 10) {
        worm.headPos.x += width - 10;
      } else if (worm.headPos.x > width - 10) {
        worm.headPos.x -= width - 10;
      }
      if (worm.headPos.y < 10) {
        worm.headPos.y += height - 10;
      } else if (worm.headPos.y > height - 10) {
        worm.headPos.y -= height - 10;
      }
    };

    function colourOfWorm(x: number, y: number): string {
      if (x < width / 2 && y < height / 2) {
        return colours[0];
      } else if (x < width / 2 && y > height / 2) {
        return colours[1];
      } else if (x > width / 2 && y < height / 2) {
        return colours[2];
      } else {
        return colours[3];
      }
    }

    p.mousePressed = () => {
      worm.headPos = {
        x: p.mouseX,
        y: p.mouseY,
      };
      walkerBody = [];
      p.background(0);
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

export default DaveTheWorm;
