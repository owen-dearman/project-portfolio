import React from "react";
import p5 from "p5";

interface starDetails {
  pos: p5.Vector;
  box: {
    width: number;
    depth: number;
    height: number;
  };
  speed: number;
}

interface backgroundDetails {
  pos: p5.Vector;
  color: string;
}

interface IProps {
  name: string;
}
class Starfield3D extends React.Component {
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
    const backgroundStars: backgroundDetails[] = [];
    let myCamera;
    const palette = ["gold", "orange", "yellow", "bronze"];

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      myCamera = p.createCamera();
      myCamera.setPosition(0, 0, 0);
      myCamera.lookAt(0, 0, -1000);
      createStars(500);
      createBackground(p.random(30, 100));
    };

    p.draw = () => {
      p.background(0);
      p.directionalLight(
        p.color(200, 100, 150),
        p.createVector(-0.8, -0.5, -0.2)
      );
      p.ambientLight(200, 200, 200);
      p.noStroke();
      backgroundStars.forEach(drawBackground);
      stars.forEach(drawStar);
      stars.forEach(updateStar);
    };

    const createStars = (numberOfShapes: number) => {
      for (let i = 0; i < numberOfShapes; i++) {
        const speed = p.random(10, 100);
        const star = {
          pos: p.createVector(
            p.random(-500, 500),
            p.random(-500, 500),
            p.random(-800, -1000)
          ),
          box: {
            width: speed / 100,
            depth: speed / 50,
            height: speed,
          },
          speed: speed,
        };
        stars.push(star);
      }
    };

    const drawStar = (star: starDetails) => {
      p.push();
      p.ambientMaterial(p.color("white"));
      p.translate(star.pos.x, star.pos.y, star.pos.z);
      p.box(star.box.width, star.box.depth, star.box.height);
      p.pop();
    };

    const updateStar = (star: starDetails) => {
      star.pos.z += star.speed;
      if (star.pos.z > 0) {
        star.pos = p.createVector(
          p.random(-500, 500),
          p.random(-500, 500),
          p.random(-800, -1000)
        );
      }
    };

    const createBackground = (num: number) => {
      for (let i = 0; i < num; i++) {
        const backStar = {
          pos: p.createVector(
            p.random(-width, width),
            p.random(-height, height),
            -1500
          ),
          color: p.random(palette),
        };
        backgroundStars.push(backStar);
      }
    };

    const drawBackground = (lump: backgroundDetails) => {
      p.push();
      p.ambientMaterial(p.color(lump.color));
      p.translate(lump.pos.x, lump.pos.y, lump.pos.z);
      p.sphere(lump.pos.x * 0.01);
      p.pop();
    };

    p.keyPressed = () => {
      switch (p.key) {
        case "w":
          for (const star of stars) {
            if (star.speed < 100) {
              star.speed *= 1.5;
            }
          }
          break;
        case "s":
          for (const star of stars) {
            star.speed /= 1.5;
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

export default Starfield3D;
