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
  {
    id: 3,
    title: "Pseudo-Random Worm Walker",
    project: "Single Worm Walker",
    artisticDesc:
      "A random walker that wanders around the canvas, changing colour depending on the sector it enters. The walker mimics some kind of radioactive worm, whom I've named Dave.",
    technicalDesc:
      "The walker's direction is determined in a pseudo-random manner using trigonometry to biased the walker in a forwards fashion which gives it a worm-like appearance. Object storage is used to maintain an array of walker positions to create the tail, which is periodically removed when the walker reaches a length of 60 segments. Worm colour is determined by the head position coordinates which trigger a change in the fill() function.",
    tags: ["p5.js", "JavaScript", "algorithm", "data storage", "animation"],
    img: ["images/screenshots/worm.jpg"],
    url: ["https://openprocessing.org/sketch/1507693"],
    reflection:
      "This random walker was one of my first milestones in p5.js, and directly inpspired me to produce the Worm Olympics game. This involves 5 random walkers having a race along the canvas. I required some help with the mathematical algorithm for walker movement, but implemented it easily enough. Since this was created, I've worked more with vectors and am confident I'd be able to replicate this walker with p5.vectors. Were I to do this again, I'd also deconstruct the functionality more as opposed to running the majority in the draw() function.",
    instructions: "Click the mouse to reposition the walker",
  },
  {
    id: 4,
    title: "Trail Drawing",
    project: "Trail Drawing",
    artisticDesc:
      "A series of simple sketches that draw patterns and pictures depending on where you move the mouse. Experiment with symmetry, or create a rainbow trail in intricate curves.",
    technicalDesc:
      "These drawings are hard coded to either mirror the X and Y coordinates of the mouse position when drawing circles, or through incrementing the X coordinate to produce a rainbow of colours. In order to reduce payload and increase performance, there is a 'self-resetting' functionality where the trails begin to delete when 300 have been placed (prior to mirroring).",
    tags: ["p5.js", "JavaScript", "animation", "artistic", "2D"],
    img: [
      "images/screenshots/trail1.jpg",
      "images/screenshots/trail2.jpg",
      "images/screenshots/trail3.jpg",
    ],
    url: [
      "https://openprocessing.org/sketch/1580340",
      "https://openprocessing.org/sketch/1580320",
      "https://openprocessing.org/sketch/1569550",
    ],
    reflection:
      "Some simple sketches that I've created based from helping out others with simplifying nested for-loops, and by taking inspiration from some sketches I've seen on Open Processing. These sketches were good practice at thinking 'how can I do this differently?' and testing out different methods for achieveing the same results.",
    instructions: "Move the mouse around to create a symmetrical drawing",
  },
  {
    id: 5,
    title: "3D Cube Simulation",
    project: "3D Box With Spheres",
    artisticDesc:
      "A line-drawing style sketch with a rotating cube filled with spheres that bounce around this inside of the cube. ",
    technicalDesc:
      "The 3D cube rotates on X, Y, and Z axis around the camera position with spheres that move around the canvas, deflecting when colliding with each other or the walls of the cube. The user has the ability to zoom in and out, as well as pan around the structure. Sphere detailed are contained within an object, with their position and movement determined by vectors.",
    tags: ["p5.js", "3D", "animation", "collision detection"],
    img: ["images/screenshots/3dspheres.jpg"],
    url: ["https://openprocessing.org/sketch/1521008"],
    reflection:
      "This sketch is visually interesting, if not nausea inducing, and was created as practice in collision detection and working with 3D models in p5.js.",
    instructions: "Press '1' to remove all spheres, '2' to add more",
  },
  {
    id: 6,
    title: "Rotating Tumblers",
    project: "Rotating Tumblers",
    artisticDesc:
      "A selection of scaled spinning arcs with their own rotation around the centre, coloured randomly from a palette.",
    technicalDesc:
      "Systematically spaced arcs which rotate clockwise or counter-clockwise, depending on a random selection decided at arc creation, with a random speed. Colour is assigned randomly at this stage from a palette.",
    tags: ["p5.js", "animation", "2D"],
    img: ["images/screenshots/rotation.jpg"],
    url: ["https://openprocessing.org/sketch/1506703"],
    reflection:
      "Rotation is one of the harder concepts in p5.js and so this sketch acts as a baseline for working with rotation. Having each tumbler have it's own rotation is a step up on having all tumblers have the same rotation, which gives another dimension to the sketch.",
    instructions: "Press spacebar to reset",
  },
  {
    id: 7,
    title: "Circle Packing",
    project: "Circle Packing",
    artisticDesc:
      "Randomly generated circles packed into a canvas, plugged into an algorithm that means they cannot overlap with any other circles.",
    technicalDesc:
      "The distance between the edges of each new circle is calculated against the position of every circle that has previously been generated. If a collision is detected, then the circle is not drawn onto the sketch. Circle diamater is pseudo-randomly generated based on a gaussian distribution. The sketch is automatically regenerated every second.",
    tags: ["p5.js", "2D", "algorithms"],
    img: ["images/screenshots/circlePacking.jpg"],
    url: ["https://openprocessing.org/sketch/1544664"],
    reflection:
      "This sketch was created to solve the problem of overlapping elements when using collision detection. Igt involves a step-by-step algorithm to avoid such collisions. It can be developed further to attempt circle position regeneration when a collision is detected in a while loop, with a regulatory counter to avoid infinite loops.",
    instructions: "",
  },
  {
    id: 8,
    title: "Battordle",
    project: "Battordle",
    artisticDesc:
      "A two player 'pass-the-phone', live Wordle-inspired game where one player picks a 5 letter word and the other player attempts to correctly guess it.",
    technicalDesc:
      "A frontend application built in TypeScript with React based around the Wordle algorithm. This app contains unit testing to monitor the scoring algorithm and dictionaries to handle the marking of a guess. The grid is created using CSS flexboxes. This app also contains API checking of word inputs against a dictionary.",
    tags: ["react", "TypeScript", "algorithms", "game", "front-end", "CSS"],
    img: ["images/screenshots/battordle.jpg"],
    url: [
      "https://battordle.netlify.app",
      "https://github.com/owen-dearman/wordle-2-player",
    ],
    reflection:
      "This app was produced after a problem-solving session designed around the Wordle scoring algorithm. It is purely a front-end application and so has no persistence, but is suitable as a quick game between two word lovers.",
    instructions: "",
  },
  {
    id: 9,
    title: "Baby Names App",
    project: "Baby Names",
    artisticDesc:
      "A front-end application for users to produce a favourites list of baby names, search for names, filter by gender, and download their picked names.",
    technicalDesc:
      "A frontend application built in TypeScript with React based around useStates and filtering an array of objects (baby names). This is a very early project undertaken during the fulltime scholarship at Academy and contains no backend persistence or API conenction.",
    tags: ["react", "TypeScript", "front-end", "CSS"],
    img: ["images/screenshots/babyNames.jpg"],
    url: [
      "https://owend-baby-names.netlify.app/",
      "https://github.com/owen-dearman/baby-names-V2",
    ],
    reflection:
      "Whilst completing it, this project was difficult due to the novelty of the tools available. However, after much more training in React and TypeScript, I am much more comfortable with the languages, as well as useStates, useEffect, and other methods.",
    instructions: "",
  },
  {
    id: 10,
    title: "TV Database",
    project: "TV Database",
    artisticDesc:
      "A front-end React app utilising the TVMaze API to organise information regarding popular TV shows and series.",
    technicalDesc:
      "This front-end application is built in TypeScript with React and fetches information from an API and displays the series and show data in React components. Users can explore the content and add shows to a favourites list.",
    tags: ["react", "TypeScript", "front-end", "CSS", "API"],
    img: ["images/screenshots/tvdatabase.jpg"],
    url: [
      "https://tv-shows-info.netlify.app/",
      "https://github.com/owen-dearman/react-tv-shows",
    ],
    reflection:
      "This was a paired project of which I was a part, completed about halfway through the fulltime scholarship at Academy. I still go back to this project to recap on various aspects of React that I haven't needed in a while. This was also one of my first experiences at paired programming.",
    instructions: "",
  },
];
