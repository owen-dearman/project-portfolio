import React from "react";
import p5, { Image } from "p5";

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
class PlanetOrbits extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth;
    let height = p.windowHeight;
    let myCamera;
    let surfaceEarth: Image;
    let surfaceSun: Image;
    let surfaceRingPlanet: Image;
    let surfaceMars: Image;
    let surfaceRing: Image;
    let surfacePlanet1: Image;
    let surfaceMoon: Image;

    p.preload = () => {
      surfaceSun = p.loadImage("sunTexture.jpg");
      surfaceEarth = p.loadImage("earthTexture.jpg");
      surfaceRingPlanet = p.loadImage("ringTexture.jpg");
      surfaceRing = p.loadImage("ringTexture2.jpg");
      surfacePlanet1 = p.loadImage("planet1.jpg");
      surfaceMoon = p.loadImage("moon.jpg");
      surfaceMars = p.loadImage("mars.jpg");
    };

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      myCamera = p.createCamera();
      myCamera.setPosition(400, -1500, 2700);
      myCamera.lookAt(0, 0, 0);
    };

    p.draw = () => {
      p.background(0);
      p.orbitControl(5, 5, 0.2);
      p.pointLight(250, 250, 250, 0, 0, 0);
      p.ambientLight(200, 200, 200);
      p.noStroke();
      p.texture(surfaceSun);
      p.sphere(230);
      p.push();
      p.rotateY(p.frameCount / 30);
      p.texture(surfaceMars);
      p.push();
      p.translate(0, 0, 400);
      p.rotateY(p.frameCount / 80);
      p.sphere(50);
      p.pop();
      p.pop();
      p.push();
      p.rotateY(p.frameCount / 70);
      p.texture(surfaceEarth);
      p.push();
      p.translate(0, 0, 800);
      p.rotateY(p.frameCount / 150);
      p.sphere(70);
      p.push();
      p.texture(surfaceMoon);
      p.rotateY(p.frameCount / 15);
      p.translate(0, 0, 150);
      p.sphere(30);
      p.pop();
      p.pop();
      p.pop();
      p.push();
      p.rotateY(p.frameCount / 80);
      p.texture(surfacePlanet1);
      p.push();
      p.translate(0, 0, 1200);
      p.rotateY(p.frameCount / 100);
      p.sphere(60);
      p.pop();
      p.pop();
      p.push();
      p.rotateY(p.frameCount / 100);
      p.texture(surfaceRingPlanet);
      p.push();
      p.translate(0, 0, 1700);
      p.rotateY(p.frameCount / 50);
      p.sphere(100);
      p.pop();
      p.translate(0, 0, 1700);
      p.rotateX(p.frameCount / 100);
      p.rotateZ(p.frameCount / 50);
      p.texture(surfaceRing);
      p.torus(130, 4);
      p.pop();
      p.push();
      p.noFill();
      p.stroke("light-grey");
      p.rotateX(p.radians(90));
      p.smooth();
      p.circle(0, 0, 800);
      p.circle(0, 0, 1600);
      p.circle(0, 0, 2400);
      p.circle(0, 0, 3400);
      p.pop();
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

export default PlanetOrbits;
