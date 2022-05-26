import React from "react";
import p5 from "p5";

interface starDetails {
  pos: p5.Vector;
  xSpeed: number;
}

interface twinkleDetails {
  pos: p5.Vector;
  size: number;
}

interface IProps {
  name: string;
}
class Starfield extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    const stars: starDetails[] = [];
    const twinkles: twinkleDetails[] = [];
    const colours = ["white", "yellow", "gold", "orange", "silver"];

    p.setup = () => {
      p.createCanvas(width, height);
      createStars();
      createTwinkles(50);
    };

    p.draw = () => {
      p.background("black");
      p.stroke("white");
      moveStars();
      drawStars();
      drawTwinkles();
    };

    function createStars() {
      for (let i = 0; i < 400; i++) {
        const star = {
          pos: p.createVector(p.random(width), p.random(height), p.random(1)),
          xSpeed: p.random(1, 30),
        };
        stars.push(star);
      }
    }

    function drawStars() {
      for (const star of stars) {
        p.strokeWeight(p.map(star.pos.z, 0, 1, 1, 1));
        p.line(
          star.pos.x,
          star.pos.y,
          star.pos.x + 0.1 * star.pos.z * star.xSpeed * star.xSpeed,
          star.pos.y
        );
      }
    }

    function moveStars() {
      for (const star of stars) {
        star.pos.x -= star.xSpeed;
        if (star.pos.x < 0) {
          star.pos.x = width;
          star.pos.y = p.random(height);
        }
      }
    }

    function createTwinkles(num: number) {
      for (let i = 0; i < num; i++) {
        const twinkle = {
          pos: p.createVector(p.random(width), p.random(height)),
          size: p.random(1, 5),
        };
        twinkles.push(twinkle);
      }
    }

    function drawTwinkles() {
      for (const twinkle of twinkles) {
        p.fill(p.random(colours));
        p.circle(twinkle.pos.x, twinkle.pos.y, twinkle.size);
      }
    }

    p.keyPressed = () => {
      switch (p.key) {
        case "w":
          for (const star of stars) {
            star.xSpeed *= 1.5;
          }
          break;
        case "s":
          for (const star of stars) {
            star.xSpeed /= 1.5;
          }
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

export default Starfield;
