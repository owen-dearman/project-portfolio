import { projectOptions } from "../App";

export interface projectDataInterface {
  id: number;
  title: string;
  project: projectOptions;
  artisticDesc: string;
  technicalDesc: string;
  tags: string[];
  img: string[];
  url: string[];
  reflection: string;
  instructions: string;
}

export const projectInformation: projectDataInterface[] = [
  {
    id: 1,
    title: "Electric Particles",
    project: "Electric Particles",
    artisticDesc:
      "A series of p5.js sketches with moving particles, dubbed 'electric particles'. When any electric particle is detected to be close to another, the two particles are connected to produce constellations of clustered particles moving around the canvas.",
    technicalDesc:
      "A particle system with procedurely generated particles which move with a random direction and velocity. When a collision with the edges of the canvas is detected, the particles direction reverses to give the appearance of the particle bouncing off the wall. Using the p5.Vector.dist() function, the distance between any given particle and all other particles is monitored, and when this falls below 100px, a line is drawn from the nuclei of the two particles. This is limited to only particles with an ID greater than the current one to avoid double line drawing, self collisions and increase performance.",
    tags: [
      "p5.js",
      "collision detection",
      "vectors",
      "JavaScript",
      "particle system",
    ],
    img: ["images/screenshots/EP1.jpg", "images/screenshots/EP2.jpg"],
    url: [
      "https://openprocessing.org/sketch/1557277",
      "https://openprocessing.org/sketch/1548028",
    ],
    reflection:
      "This sketch represents the first use of collision detection (other than practices) to keep the particles on screen. It also acts as practice in vector use before some more complex sketches were attempted. One of the most complex aspects of this sketch was to determine whether a particle, upon creation, would occupy the same space as an already generated particle. Whilst avoiding this is not integral to this sketch as it is for others, it was a good opportunity to  practice measuring the distance between particles and using methods such as array.every().",
    instructions: "Move the mouse around to connect with nearby particles",
  },
  {
    id: 2,
    title: "C64 Print Art",
    project: "Print Art",
    artisticDesc:
      "A series of sketches containing procedurely generated lines in a grid with pseudo-random orientation based on a colour palette to produce imitations of Commodore 64 artwork.",
    technicalDesc:
      "This sketch is made using nested for-loops to create a grid of cells spanning the width and height of the canvas. The coordinates of each cell corner are calculate to provide different points to draw lines between depending on the outcome of a random selection. Each sketch has different possible selections which creates the vastly different aesthetics that can be seen below. For example, the first sketch contains only the possibility for diagonal lines (corner to corner), whilst the penultimate sketch allows for six different line orientations.",
    tags: ["p5.js", "algorithms", "JavaScript"],
    img: [
      "images/screenshots/p1.jpg",
      "images/screenshots/p2.jpg",
      "images/screenshots/p3.jpg",
      "images/screenshots/p4.jpg",
      "images/screenshots/p5.jpg",
      "images/screenshots/p6.jpg",
      "images/screenshots/p7.jpg",
    ],
    url: [
      "https://openprocessing.org/sketch/1554594",
      "https://openprocessing.org/sketch/1554609",
      "https://openprocessing.org/sketch/1554612",
      "https://openprocessing.org/sketch/1556162",
      "https://openprocessing.org/sketch/1556174",
      "https://openprocessing.org/sketch/1556177",
      "https://openprocessing.org/sketch/1556199",
    ],
    reflection:
      "The hardest part of these sketches was to calculate the coordinates for each possible line orientation within the grid. After that, it was relatively simple to randomly select the orientation for the lines. In the animated sketch, it was a complex process to determine the origin for each line to rotate on, and to scale this for each grid cell. It was interesting to observe how drastically different the resulting sketches appear when the line coordinates are shifted a matter of pixels, as in sketches 4 and 5 below.",
    instructions: "Try 'z' to change colour palette",
  },
];
