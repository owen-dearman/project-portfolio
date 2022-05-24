import React from "react";
import p5 from "p5";

interface boxProps {
  color: string;
  pos: p5.Vector;
  posTarget: p5.Vector;
  box: p5.Vector;
  boxTarget: p5.Vector;
  rotation: p5.Vector;
  rotationTarget: p5.Vector;
  rotationRate: number;
}

interface IProps {
  name: string;
}
class ObjectManipulation extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    const colourPalette = [
      "#5c323e",
      "#a82743",
      "#e15e32",
      "#c0d23e",
      "#e5f04c",
      "#ff4e50",
      "#fc913a",
      "#f9d423",
      "#ede574",
      "#e1f5c4",
    ];
    let shapes: boxProps[] = [];
    let myCamera;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      myCamera = p.createCamera();
      myCamera.setPosition(50, -100, 2000);
      myCamera.lookAt(0, 0, 0);
      createRandomBoxes(p.random(75, 150));
      const instructions = p.createDiv(`Instructions: <br>
      Z = Add more objects; <br>
      X = Reset Sketch; <br>
      C = Send all objects to origin; <br>
      V = Change target destination of all objects; <br>
      B = Send all objects to sphere; <br>
      N = Make all objects small cubes; <br>
      M = Change target size of all objects; <br>
      , = Charge target orientation of all objects; <br>
      `);
      instructions.position(10, 10);
    };

    p.draw = () => {
      p.background("#5cacc4");
      p.directionalLight(
        p.color(150, 100, 0),
        p.createVector(-0.8, -0.5, -0.2)
      );
      p.ambientLight(200, 90, 100);
      p.noStroke();
      shapes.forEach((x) => drawBox(x));
      shapes.forEach((x) => updateBox(x));
    };

    const createRandomBoxes = (numberOfShapes: number) => {
      for (let i = 0; i < numberOfShapes; i++) {
        const boxSpecs = {
          color: p.random(colourPalette),
          pos: p.createVector(
            p.random(-1500, 1500),
            p.random(-1500, 1500),
            p.random(-1500, 1500)
          ),
          posTarget: p.createVector(
            p.random(-1500, 1500),
            p.random(-1500, 1500),
            p.random(-1500, 1500)
          ),
          box: p.createVector(
            p.random(10, 100),
            p.random(10, 100),
            p.random(10, 100)
          ),
          boxTarget: p.createVector(
            p.random(50, 250),
            p.random(50, 250),
            p.random(50, 250)
          ),
          rotation: p5.Vector.random3D(),
          rotationTarget: p5.Vector.random3D(),
          rotationRate: p.random(0.01, 0.1),
        };
        shapes.push(boxSpecs);
      }
    };

    const drawBox = (shape: boxProps) => {
      p.push();
      p.ambientMaterial(p.color(shape.color));
      p.translate(shape.pos.x, shape.pos.y, shape.pos.z);
      p.rotateX(shape.rotation.x);
      p.rotateY(shape.rotation.y);
      p.rotateZ(shape.rotation.z);
      p.box(shape.box.x, shape.box.y, shape.box.z);
      p.pop();
    };

    const updateBox = (shape: boxProps) => {
      p5.Vector.lerp(shape.pos, shape.posTarget, 0.005);
      p5.Vector.lerp(shape.box, shape.boxTarget, 0.005);
      p5.Vector.lerp(shape.rotation, shape.rotationTarget, shape.rotationRate);
    };

    const sendShapeToOrigin = (shape: boxProps) => {
      shape.posTarget = p.createVector(0, 0, 0);
    };

    const setShapeNewTarget = (shape: boxProps) => {
      shape.posTarget = p.createVector(
        p.random(-1500, 1500),
        p.random(-1500, 1500),
        p.random(-1500, 1500)
      );
    };

    const setShapeTargetToSphere = (shape: boxProps) => {
      shape.posTarget = p5.Vector.random3D().mult(600);
    };

    const setShapeToCube = (shape: boxProps) => {
      shape.boxTarget = p.createVector(50, 50, 50);
    };

    const setShapeNewSize = (shape: boxProps) => {
      shape.boxTarget = p.createVector(
        p.random(50, 250),
        p.random(50, 200),
        p.random(50, 250)
      );
    };

    const setRotationTargetToRandom = (shape: boxProps) => {
      shape.rotationTarget = p.createVector(
        (p.random([0, 1, 2, 3]) * p.PI) / 2,
        (p.random([0, 1, 2, 3]) * p.PI) / 2,
        (p.random([0, 1, 2, 3]) * p.PI) / 2
      );
    };

    p.keyTyped = () => {
      if (p.key === "z") {
        createRandomBoxes(p.random(10, 50));
      } else if (p.key === "x") {
        shapes = [];
        createRandomBoxes(p.random(75, 150));
      } else if (p.key === "c") {
        shapes.forEach((x) => sendShapeToOrigin(x));
      } else if (p.key === "v") {
        shapes.forEach((x) => setShapeNewTarget(x));
      } else if (p.key === "b") {
        shapes.forEach((x) => setShapeTargetToSphere(x));
      } else if (p.key === "n") {
        shapes.forEach((x) => setShapeToCube(x));
      } else if (p.key === "m") {
        shapes.forEach((x) => setShapeNewSize(x));
      } else if (p.key === ",") {
        shapes.forEach((x) => setRotationTargetToRandom(x));
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

export default ObjectManipulation;
