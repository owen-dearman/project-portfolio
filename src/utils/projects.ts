export interface projectDataInterface {
  id: number;
  title: string;
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
    artisticDesc:
      "A series of p5.js sketches with self-moving particles, dubbed 'electric particles'. When an electric particle is detected to be within a certain distance of another, lines between the nuclei of the two particles are drawn. This produced constellations of connected particles moving around the canvas.",
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
];
