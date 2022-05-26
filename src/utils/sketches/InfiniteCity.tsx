import React from "react";
import p5 from "p5";

interface buildingInt {
  pos: p5.Vector;
  box: p5.Vector;
  roadSide: number;
  colour: string;
}

interface carInt {
  pos: p5.Vector;
}

interface groundInt {
  pos: p5.Vector;
}

interface IProps {
  name: string;
}
class InfiniteCity extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = 800;
    let height = 800;
    let myCamera: p5.Camera;
    let car: carInt;
    const buildingDetails: buildingInt[] = [];
    let ground: groundInt;
    const colourPalette = [
      "#f8b195",
      "#f67280",
      "#c06c84",
      "#6c5b7b",
      "#355c7d",
    ];

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      const eyeZ = height / 2 / p.tan(p.PI / 6);
      const nearClip = 1;
      p.perspective(p.PI / 3, width / height, nearClip, eyeZ * 10);
      myCamera = p.createCamera();
      myCamera.setPosition(400, -400, 400);
      myCamera.lookAt(0, 0, 0);
      setupGround();
      setupCar();
      createBuildings(150);
    };

    p.draw = () => {
      p.background(100);
      p.directionalLight(
        p.color(100, 100, 100),
        p.createVector(0.8, -0.5, -0.2)
      );
      p.ambientLight(210, 200, 200);
      p.noStroke();
      drawVehicle();
      drawGround();
      buildingDetails.forEach(drawBuilding);
      updateVehicle();
      updateCamera();
      updateGround();
      updateBuildings();
    };

    const updateCamera = () => {
      myCamera.setPosition(car.pos.x - 300, car.pos.y - 140, 0);
      myCamera.lookAt(car.pos.x, 0, 0);
    };

    const drawVehicle = () => {
      p.push();
      p.translate(car.pos.x, car.pos.y, car.pos.z);
      //car body
      p.push();
      p.ambientMaterial(p.color("#FFFF50"));
      p.translate(0, -30, 0);
      p.box(60, 40, 40);
      p.translate(0, 10, 0);
      p.box(120, 20, 40);
      p.pop();

      //car wheels
      p.push();
      p.ambientMaterial(p.color("#272A2A"));
      p.translate(30, -10, 20);
      p.rotateX(p.radians(90));
      p.cylinder(10, 5);
      p.ambientMaterial(p.color("#272A2A"));
      p.translate(-60, 0, 0);
      p.cylinder(10, 5);
      p.ambientMaterial(p.color("#272A2A"));
      p.translate(0, -40, 0);
      p.cylinder(10, 5);
      p.ambientMaterial(p.color("#272A2A"));
      p.translate(60, 0, 0);
      p.cylinder(10, 5);
      p.pop();

      //hub caps
      p.push();
      p.ambientMaterial(p.color("#A6A9A6"));
      p.translate(30, -10, 23);
      p.rotateX(p.radians(90));
      p.cylinder(5, 1);
      p.translate(-60, 0, 0);
      p.cylinder(5, 1);
      p.translate(0, -46, 0);
      p.cylinder(5, 1);
      p.translate(60, 0, 0);
      p.cylinder(5, 1);
      p.pop();

      //windows
      p.ambientMaterial(p.color("#a8ccd7"));
      p.push();
      p.translate(30, -40, 0);
      p.rotateY(p.radians(90));
      p.box(40, 16, 1);
      p.translate(0, 0, -60);
      p.ambientMaterial(p.color("#B2BEB5"));
      p.box(36, 16, 1);
      p.pop();
      p.push();
      p.translate(20, -40, 20);
      p.box(20, 16, 1);
      p.translate(0, 0, -40);
      p.box(20, 16, 1);
      p.translate(-25, 0, 0);
      p.box(20, 16, 1);
      p.translate(0, 0, 40);
      p.box(20, 16, 1);
      p.pop();

      //car grill
      p.push();
      p.ambientMaterial(p.color("#62615E"));
      p.translate(60, -20, 0);
      p.rotateY(p.radians(90));
      p.box(30, 10, 1);
      p.pop();

      //racing stripes
      p.ambientMaterial(p.color("#1f1f1f"));
      p.push();
      p.translate(0, -50, 6);
      p.box(60, 1, 5);
      p.translate(0, 0, -12);
      p.box(60, 1, 5);
      p.pop();
      p.push();
      p.translate(45, -30, 6);
      p.box(30, 1, 5);
      p.translate(0, 0, -12);
      p.box(30, 1, 5);
      p.translate(-90, 0, 0);
      p.box(30, 1, 5);
      p.translate(0, 0, 12);
      p.box(30, 1, 5);
      p.pop();
      p.pop();
    };

    function setupCar() {
      car = {
        pos: p.createVector(-1000, 0, 0),
      };
    }

    const updateVehicle = () => {
      car.pos.x += 20;
      car.pos.z = p.map(p.mouseX, 0, p.windowWidth * 0.9, -100, 100, true);
    };

    function drawGround() {
      //base ground
      p.push();
      p.translate(ground.pos.x, ground.pos.y, ground.pos.z);
      p.push();
      p.ambientMaterial(p.color("#7ab317"));
      p.translate(0, 1, 0);
      p.box(8000, 1, 2000);
      p.pop();
      //road
      p.push();
      p.ambientMaterial(p.color("#B9B5B4"));
      p.box(8000, 1, 200);
      p.pop();
      p.pop();
    }

    function setupGround() {
      ground = {
        pos: p.createVector(0, 0, 0),
      };
    }

    const updateGround = () => {
      if (car.pos.x > ground.pos.x / 2) {
        ground.pos.x += 20;
      }
    };

    const createBuildings = (numOfShapes: number) => {
      for (let i = 0; i < numOfShapes; i++) {
        const building = {
          pos: p.createVector(p.random(-400, 2000), 0, p.random(200, 800)),
          box: p.createVector(
            p.random(50, 150),
            p.random(200, 1500),
            p.random(50, 200)
          ),
          roadSide: p.random([1, -1]),
          colour: p.random(colourPalette),
        };
        buildingDetails.push(building);
      }
    };

    const drawBuilding = (b: buildingInt) => {
      p.ambientMaterial(p.color(b.colour));
      p.push();
      p.translate(b.pos.x, b.pos.y, b.pos.z * b.roadSide);
      p.box(b.box.x, b.box.y, b.box.z);
      p.pop();
    };

    function updateBuildings() {
      for (const b of buildingDetails) {
        if (b.pos.x < car.pos.x - 200) {
          b.pos.x += p.random(2000, 5000);
          b.pos.y = 0;
          b.pos.z = p.random(180, 800);
        }
      }
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

export default InfiniteCity;
