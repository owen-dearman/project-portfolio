import React from "react";
import p5 from "p5";

interface particleProps {
  pos: { x: number; y: number };
  size: number;
  dirSpd: { x: number; y: number };
  id: number;
}

interface IProps {
  name: string;
}
class ElectricParticles extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    const particles: particleProps[] = [];

    p.setup = () => {
      p.createCanvas(width, height);
      createParticles(100);
    };

    p.draw = () => {
      p.background(200);
      particles.forEach(drawParticle);
      particles.forEach(moveParticle);

      p.noStroke();
      p.fill("red");
      p.circle(p.mouseX, p.mouseY, 30);

      for (const particle of particles) {
        const mouseDistance = p.dist(
          particle.pos.x,
          particle.pos.y,
          p.mouseX,
          p.mouseY
        );
        if (mouseDistance < 100) {
          p.stroke("red");
          p.line(particle.pos.x, particle.pos.y, p.mouseX, p.mouseY);
        }
        for (const otherParticle of particles) {
          const particleDistance = p.dist(
            particle.pos.x,
            particle.pos.y,
            otherParticle.pos.x,
            otherParticle.pos.y
          );
          if (particleDistance < 100 && particle.id < otherParticle.id) {
            p.stroke(0);
            p.strokeWeight((otherParticle.size + particle.size) / 20);
            p.line(
              particle.pos.x,
              particle.pos.y,
              otherParticle.pos.x,
              otherParticle.pos.y
            );
          }
        }
      }
    };

    const createParticles = (num: number) => {
      for (let i = 0; i < num; i++) {
        const particle = {
          pos: p.createVector(p.random(width), p.random(height)),
          size: p.random(10, 25),
          dirSpd: p.createVector(p.random(-2, 2), p.random(-2, 2)),
          id: i,
        };

        if (particles.every((p) => doesntCollide(p, particle))) {
          particles.push(particle);
        }
      }
    };

    const doesntCollide = (existingP: particleProps, newP: particleProps) => {
      const radiusSum = existingP.size / 2 + newP.size / 2;
      const distanceBetweenCircles = p.dist(
        existingP.pos.x,
        existingP.pos.y,
        newP.pos.x,
        newP.pos.y
      );
      return distanceBetweenCircles > radiusSum;
    };

    const drawParticle = (part: particleProps) => {
      p.stroke(50);
      p.noFill();
      p.circle(part.pos.x, part.pos.y, part.size);
    };

    const moveParticle = (p: particleProps) => {
      p.pos.x += p.dirSpd.x;
      p.pos.y += p.dirSpd.y;

      if (p.pos.x < 0 || p.pos.x > width) {
        p.dirSpd.x *= -1;
      } else if (p.pos.y < 0 || p.pos.y > height) {
        p.dirSpd.y *= -1;
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

export default ElectricParticles;
