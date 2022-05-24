import React from "react";
import p5 from "p5";

interface sphereProps {
  sphereDiameter: number;
  pos: { x: number; y: number; z: number };
  direction: { x: number; y: number; z: number };
  id: number;
}

interface IProps {
  name: string;
}
class ThreeDCube extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    let sphereSpecs: sphereProps[] = [];
    let myCamera;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      myCamera = p.createCamera();
      myCamera.setPosition(50, -100, 400);
      myCamera.lookAt(0, 0, 0);
      createSpheres(5);
    };

    p.draw = () => {
      p.background("white");
      //p.orbitControl(5, 5, 0.1);
      p.directionalLight(
        p.color(150, 100, 0),
        p.createVector(-0.8, -0.5, -0.2)
      );
      p.ambientLight(150, 100, 100);
      p.noFill();
      p.stroke("black");
      p.rotateY(p.frameCount / 100);
      p.rotateX(p.frameCount / 100);
      p.rotateZ(p.frameCount / 100);
      p.box(600, 600, 600);
      sphereSpecs.forEach((el) => drawSphere(el));
      sphereSpecs.forEach((el) => updateSpherePosition(el));
    };

    const createSpheres = (numberSpheres: number) => {
      for (let i = 0; i < numberSpheres; i++) {
        const sphereDiameter = p.random(30, 80);
        const indSphereDetails = {
          sphereDiameter: sphereDiameter,
          pos: p.createVector(
            p.random(-(300 - sphereDiameter), 300 - sphereDiameter),
            p.random(-(300 - sphereDiameter), 300 - sphereDiameter),
            p.random(-(300 - sphereDiameter), 300 - sphereDiameter)
          ),
          direction: p.createVector(
            p.random(1, 5),
            p.random(1, 5),
            p.random(1, 5)
          ),
          id: p.random(10000000),
        };
        sphereSpecs.push(indSphereDetails);
      }
    };

    const drawSphere = (s: sphereProps) => {
      p.push();
      p.noFill();
      p.translate(s.pos.x, s.pos.y, s.pos.z);
      p.sphere(s.sphereDiameter, 6, 8);
      p.pop();
    };

    const updateSpherePosition = (s: sphereProps) => {
      s.pos.x += s.direction.x;
      s.pos.y += s.direction.y;
      s.pos.z += s.direction.z;

      if (
        s.pos.x > 300 - s.sphereDiameter ||
        s.pos.x < -(300 - s.sphereDiameter)
      ) {
        s.direction.x *= -1;
      }
      if (
        s.pos.y > 300 - s.sphereDiameter ||
        s.pos.y < -(300 - s.sphereDiameter)
      ) {
        s.direction.y *= -1;
      }
      if (
        s.pos.z > 300 - s.sphereDiameter ||
        s.pos.z < -(300 - s.sphereDiameter)
      ) {
        s.direction.z *= -1;
      }

      for (let i = 0; i < sphereSpecs.length; i++) {
        const distanceBetweenObjects = p.dist(
          s.pos.x,
          s.pos.y,
          s.pos.z,
          sphereSpecs[i].pos.x,
          sphereSpecs[i].pos.y,
          sphereSpecs[i].pos.z
        );
        const collisionPoint =
          s.sphereDiameter / 2 + sphereSpecs[i].sphereDiameter / 2;
        if (
          distanceBetweenObjects < collisionPoint &&
          s.id !== sphereSpecs[i].id
        ) {
          s.direction.x *= -1;
          s.direction.y *= -1;
          s.direction.z += -1;
          break;
        }
      }
    };

    p.keyTyped = () => {
      if (p.key === "1") {
        sphereSpecs = [];
      } else if (p.key === "2") {
        createSpheres(3);
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

export default ThreeDCube;
