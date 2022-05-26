import React from "react";
import p5 from "p5";

interface FireworkDetails {
  targetPos: p5.Vector;
  pos: p5.Vector;
  prevPos: p5.Vector;
  vel: p5.Vector;
  exists: boolean;
  fuseLength: number;
}

interface ParticleDetails {
  pos: p5.Vector;
  prevPos: p5.Vector;
  vel: p5.Vector;
  colours: string[];
  age: number;
  ageOfDeath: number;
  exists: boolean;
  explosionStyle: number;
}

interface moonDetails {
  x: number;
  y: number;
  size: number;
  fill: number;
}

interface StarDetails {
  x: number;
  y: number;
}

interface IProps {
  name: string;
}
class FireWorks extends React.Component {
  private myRef: React.RefObject<HTMLInputElement>;
  private myP5: p5;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: p5): void => {
    let width = p.windowWidth * 0.9;
    let height = p.windowHeight;
    let particleArr: ParticleDetails[] = [];
    let fireworkArr: FireworkDetails[] = [];
    const moonDetails: moonDetails[] = [];
    const starDetails: StarDetails[] = [];
    let shouldDrawTrails = true;
    const colourPalette = [
      "red",
      "blue",
      "light blue",
      "pink",
      "violet",
      "yellow",
      "orange",
      "silver",
      "green",
      "light green",
      "purple",
    ];

    p.setup = () => {
      p.createCanvas(width, height);
      createFirework(p.random(50, width - 50), p.random(100, height / 2));
      createMoonParticles(50);
      createStars(p.random(20, 100));
    };

    p.draw = () => {
      p.colorMode(p.RGB);
      if (shouldDrawTrails) {
        p.background(20, 20, 20, 30);
      } else {
        p.background(20, 20, 20);
      }
      drawStars();
      drawMoon();
      if (p.frameCount % 100 === 0) {
        createFirework(p.random(50, width - 50), p.random(0, height * 0.75));
      }

      fireworkArr.forEach(drawFirework);
      fireworkArr.forEach(moveFirework);

      for (const firework of fireworkArr) {
        if (firework.fuseLength < 0) {
          createParticles(p.random(100, 250), firework.pos);
          firework.exists = false;
        }
      }

      particleArr.forEach(drawParticle);
      particleArr.forEach(moveParticle);
      fireworkArr = fireworkArr.filter((f) => f.exists === true);
      particleArr = particleArr.filter((p) => p.exists === true);
    };

    function drawMoon() {
      p.push();
      p.noStroke();
      p.fill(110, 110, 110);
      p.circle(500, 500, 600);
      for (const el of moonDetails) {
        p.fill(el.fill, el.fill, el.fill);
        p.circle(el.x, el.y, el.size);
      }
      p.pop();
    }

    function createStars(num: number) {
      for (let i = 0; i < num; i++) {
        const star = {
          x: p.random(width),
          y: p.random(height),
        };
        starDetails.push(star);
      }
    }

    function drawStars() {
      for (const star of starDetails) {
        p.push();
        p.noStroke();
        p.fill(150);
        p.circle(star.x, star.y, 2);
        p.pop();
      }
    }

    p.keyPressed = () => {
      switch (p.key) {
        case "t":
          shouldDrawTrails = !shouldDrawTrails;
          break;
      }
    };

    function createMoonParticles(num: number) {
      for (let i = 0; i <= num; i++) {
        const xPos = p.random(290, 710);
        const yPos = p.random(290, 710);
        const craterSize = getSizeOfCrater(xPos, yPos);
        const crater = {
          x: xPos,
          y: yPos,
          size: craterSize,
          fill: p.random(90, 100),
        };
        moonDetails.push(crater);
      }
    }

    function getSizeOfCrater(x: number, y: number) {
      const thresholdOfMoon = 300;
      const distanceBetweenMoonAndCrater = p.dist(500, 500, x, y);
      const maxCraterSize = thresholdOfMoon - distanceBetweenMoonAndCrater;
      return p.random(maxCraterSize);
    }

    function createParticles(num: number, startPos: p5.Vector) {
      const colourpick: string[] = [
        p.random(colourPalette),
        p.random(colourPalette),
      ];
      const stylepick: number = p.random([1, 2, 3, 4]);
      for (let i = 0; i < num; i++) {
        const explosionPos = startPos.copy();
        const particle = {
          pos: explosionPos,
          prevPos: explosionPos.copy(),
          vel: randomParticleVelocity(),
          colours: colourpick,
          age: 0,
          ageOfDeath: p.random(10, 40),
          exists: true,
          explosionStyle: stylepick,
        };
        particleArr.push(particle);
      }
    }

    function moveParticle(particle: ParticleDetails) {
      particle.prevPos = particle.pos.copy();
      const gravity = p5.Vector.fromAngle(p.radians(90), 0.1);
      const smallRandomAccel = p5.Vector.random2D();
      particle.pos.add(particle.vel);
      particle.vel.add(gravity);
      particle.vel.add(smallRandomAccel.mult(0.2));
    }

    const drawParticle = (particle: ParticleDetails) => {
      let slider = 0;
      switch (particle.explosionStyle) {
        case 1:
          slider = p.map(particle.vel.mag(), 1, 5, 0, 1, true);
          p.colorMode(p.HSB);
          p.strokeWeight(2.5);
          break;
        case 2:
          slider = p.map(particle.age, 1, 40, 0, 1, true);
          p.colorMode(p.HSB);
          p.strokeWeight(2.5);
          break;
        case 3:
          slider = p.map(particle.vel.mag(), 1, 5, 0, 1, true);
          p.colorMode(p.RGB);
          p.strokeWeight(1);
          break;
        case 4:
          p.stroke(p.random(particle.colours));
          break;
      }
      if (particle.explosionStyle !== 4) {
        p.stroke(
          p.lerpColor(
            p.color(particle.colours[0]),
            p.color(particle.colours[1]),
            slider
          )
        );
      }
      p.line(
        particle.prevPos.x,
        particle.prevPos.y,
        particle.pos.x,
        particle.pos.y
      );
      particle.age++;
      if (particle.age > particle.ageOfDeath) {
        particle.exists = false;
      }
    };

    function randomParticleVelocity() {
      const speed = p.random(0.5, 4);
      const direction = p.radians(p.random(360));
      const velocity = p5.Vector.fromAngle(direction, speed);
      return velocity;
    }

    function createFirework(targetX: number, targetY: number) {
      const startPos = p.createVector(p.random(width), height);
      const targetPos = p.createVector(targetX, targetY);
      const magnitude = p.random(4, 6);
      const fuseLength = travelTimeToTarget(startPos, targetPos, magnitude);
      const firework = {
        targetPos: targetPos,
        pos: startPos,
        prevPos: startPos.copy(),
        vel: p5.Vector.sub(targetPos, startPos).setMag(magnitude),
        exists: true,
        fuseLength: fuseLength,
      };
      fireworkArr.push(firework);
    }

    function travelTimeToTarget(
      startVector: p5.Vector,
      endVector: p5.Vector,
      speed: number
    ) {
      const distance = startVector.dist(endVector);
      const time = distance / speed;
      return time - 15;
    }

    const drawFirework = (firework: FireworkDetails) => {
      p.stroke("white");
      p.strokeWeight(1);
      p.line(
        firework.prevPos.x,
        firework.prevPos.y,
        firework.pos.x,
        firework.pos.y
      );
    };

    const moveFirework = (firework: FireworkDetails) => {
      firework.prevPos = firework.pos.copy();
      firework.pos.add(firework.vel);
      const smallRandomAccel = p5.Vector.random2D();
      firework.vel.add(smallRandomAccel.mult(0.075));
      firework.fuseLength -= 1;
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

export default FireWorks;
