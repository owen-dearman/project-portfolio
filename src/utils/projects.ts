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
    title: "Worm Olympics",
    project: "Worm Olympics",
    artisticDesc:
      "A series of p5.js sketches creating a remote multiplayer game revolving around betting on the worm you think will win a sprint race.",
    technicalDesc:
      "This sketch uses socket.io to talk between sketches relaying live race information and the voting information. It involves some retro graphics and object storage like the single random walker sketch.",
    tags: [
      "p5.js",
      "JavaScript",
      "socket.io",
      "animation",
      "game",
      "collision detection",
      "2D",
      "algorithm",
    ],
    img: [
      "images/screenshots/wormOlympics.jpg",
      "images/screenshots/wormOlympicsVoting.jpg",
    ],
    url: [
      "https://openprocessing.org/sketch/1509211",
      "https://openprocessing.org/sketch/1530348",
    ],
    reflection:
      "This was the biggest project I'd undertaken to this point and I'm really pleased with how it turned out. There are a lot of components which had to be considered and it was really beneficial to be using an editor other than VS Code to get a handle on the importance of organisation when programming.",
    instructions: "",
  },
  {
    id: 2,
    title: "Battordle",
    project: "Battordle",
    artisticDesc:
      "A two player 'pass-the-phone', live Wordle-inspired game where one player picks a 5 letter word and the other player attempts to correctly guess it.",
    technicalDesc:
      "A frontend application built in TypeScript with React based around the Wordle algorithm. This app contains unit testing to monitor the scoring algorithm and dictionaries to handle the marking of a guess. The grid is created using CSS flexboxes. This app also contains API checking of word inputs against a dictionary.",
    tags: [
      "react",
      "TypeScript",
      "algorithms",
      "game",
      "front-end",
      "CSS",
      "frontend",
    ],
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
    id: 3,
    title: "Pastebin App",
    project: "Pastebin App",
    artisticDesc:
      "This was a 3 person fullstack project based on a pastebin where users can visit the site and store text, comment, and retrieve stored text.",
    technicalDesc:
      "Postres SQL is used to give persistence to the application, accessed via an Express backend. The frontend is created using React. The database is normalised following convention in the field.",
    tags: [
      "react",
      "fullstack",
      "TypeScript",
      "Express",
      "SQL",
      "frontend",
      "backend",
    ],
    img: ["images/screenshots/pastebin.jpg"],
    url: [
      "https://pastebins-frontend.netlify.app/",
      "https://github.com/NobeenIslam/pastebins-frontend",
      "https://github.com/NobeenIslam/pastebins-server",
    ],
    reflection:
      "This was one of the first complete fullstack apps I've been a part of making and it was a great experience to see how all the components fit together.",
    instructions: "",
  },
  {
    id: 4,
    title: "Fireworks Display",
    project: "Fireworks",
    artisticDesc:
      "A series of animations based on the physics and aesthetics of a night time fireworks display. This project contains three animations: an automated display set infront of a large moon; a display where fireworks are triggered by mouse click and travel to the mouse position before exploding; and an animation where embers are created and fall to the ground based on the user dragging the mouse.",
    technicalDesc:
      "A firework is constructed of a line drawn between its current position vector and its previous position vector. The firework moves when a velocity vector is applied to the position vector, with a small smount of random acceleration. The firework is created with a fuse, which decreases by 1 every frame until 0, when the firework 'explodes.' The explosion consists of the creation of a number of particles, drawn the same way as the fireworks, but with added aesthetic styling. These accelerate away from the point of explosion in 360 degrees, with a gravity acting upon them. The embers have a random age and once this is reached, they are removed from the object storage which allows the sketch to continue without excess unused data being stored.",
    tags: [
      "p5.js",
      "animation",
      "2D",
      "vectors",
      "algorithm",
      "physics",
      "JavaScript",
      "particle system",
    ],
    img: [
      "images/screenshots/fireworks1.jpg",
      "images/screenshots/fireworks2.jpg",
      "images/screenshots/embers.jpg",
    ],
    url: [
      "https://openprocessing.org/sketch/1558632",
      "https://openprocessing.org/sketch/1558427",
      "https://openprocessing.org/sketch/1555314",
    ],
    reflection:
      "When I started creative coding using p5.js, my goal was to create a fireworks display. The majority of my sketches, other than learning the basics of p5.js have been building to this sketch. I'm extremely proud of how it has turned out, including some very realistic physics with the wobbling fireworks and explosion particles that waft downwards. This series of sketches taught me the most about vectors, including the different methods to use on them in the p5.js library.",
    instructions: "Press 't' to change firework style.",
  },
  {
    id: 5,
    title: "Project Dashboard",
    project: "Corpsquad",
    artisticDesc:
      "A front-end app built for a provided API as part of the interview process for a comapny. The user can view all projects for a fictional company: CorpSquad Consultancy; as well as filter and sort the projects that fit their criteria. They can go to an employee or project page by clicking the relevant link, or by typing in the address bar.",
    technicalDesc:
      "This app makes use of useReducer to limit the number of useStates required by the app. As such, a dispatch function is passed down which takes a type and a payload if necessary to trigger the changes in the state. This allows a large number of complex filters, for example, to be handled by one object in the state. Secondly, React Router is used to handle browser changes such as refresh, the back button and typing in the address bar to navigate around the app.",
    tags: [
      "front-end",
      "React",
      "TypeScript",
      "useReducer",
      "React Router",
      "API",
    ],
    img: ["images/screenshots/corpsquad.jpg"],
    url: [
      "https://corpsquad-dashboard-dearman.netlify.app/",
      "https://github.com/owen-dearman/corpsquad-dashboard",
    ],
    reflection:
      "This is the most complex front-end project to date. In order to complete it, I had to learn how to use useReducer and React Router during the build process, and refactor the project several times in order to meet the brief. However, since doing this project, I think I will use these two factors in most projects now due to the advantages they have over useState and conditional component rendering.",
    instructions:
      "The API is sleepful, therefore, may take some time to boot up if not used in a while!",
  },
  {
    id: 6,
    title: "Dog Voting App",
    project: "Dog Voting App",
    artisticDesc:
      "A fullstack app that I was a part of producing with a frontend in TypeScript and React and a backend in Express and SQL. The user is presented with photos from two dog breeds, fetched from an API. They can vote on their favourite dog from the two and see a leaderboard of how others have voted.",
    technicalDesc:
      "This app involves repetitive fetching data from an external API was good practice for promises and data manipulation and storage. Handling http requests from both an external API and the backend involved an effort to maintain documentation and structure to avoid confusion and loss of data.",
    tags: ["react", "fullstack", "TypeScript", "Express", "SQL", "API"],
    img: ["images/screenshots/dogVoting.jpg"],
    url: [
      "https://saj-zeri-patelman-dogvotes.netlify.app/",
      "https://github.com/sajsiv/DogBreedFrontend",
      "https://github.com/roshnihpatel/Dog-Breed-Voting-Backend",
    ],
    reflection:
      "The was an interesting project to be a part of, as on the surface there doesn't seem to be much to it. However, there's a great effort to keep everything clean and robust, and to account for fluctuations in the data. Some examples of this include being able to refresh the leaderboard and fetching new images of the same dog breed for comparison.",
    instructions: "",
  },
  {
    id: 7,
    title: "Posenet Glasses",
    project: "Posenet Glasses",
    artisticDesc:
      "Using an artificial intelligence API called Posenet to draw Elton John glasses on your face! These will work on multiple people in the same frame and use the distance between the eyes to scale the size of the stars.",
    technicalDesc:
      "The Posenet AI can detect 17 different poses, and passes a confidence rating to the sketch. As such, it can be declared that the glasses will only be drawn on the user if the AI is confident enough that they are indeed eyes. This makes the project more robust and less likely to end up with stars on your ears!",
    tags: ["p5.js", "posenet", "AI", "API"],
    img: ["images/screenshots/posenet.jpg"],
    url: ["https://openprocessing.org/sketch/1569837"],
    reflection:
      "I'm really interested in AI and machine learning, so this was a really interesting starting point to the world of self-learning computers. Also, I could practice at using what information I could get to solve problems, such as scaling the stars. Without information on distance from screen or similar, I had to get creative to deicde how big to draw the stars.",
    instructions: "",
  },
  {
    id: 8,
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
      "animation",
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    title: "3D Cube Simulation",
    project: "3D Box With Spheres",
    artisticDesc:
      "A line-drawing style sketch with a rotating cube filled with spheres that bounce around this inside of the cube. ",
    technicalDesc:
      "The 3D cube rotates on X, Y, and Z axis around the camera position with spheres that move around the canvas, deflecting when colliding with each other or the walls of the cube. The user has the ability to zoom in and out, as well as pan around the structure. Sphere detailed are contained within an object, with their position and movement determined by vectors.",
    tags: ["p5.js", "3D", "animation", "collision detection", "JavaScript"],
    img: ["images/screenshots/3dspheres.jpg"],
    url: ["https://openprocessing.org/sketch/1521008"],
    reflection:
      "This sketch is visually interesting, if not nausea inducing, and was created as practice in collision detection and working with 3D models in p5.js.",
    instructions: "Press '1' to remove all spheres, '2' to add more",
  },
  {
    id: 13,
    title: "Planet Orbits",
    project: "Planet Orbits",
    artisticDesc:
      "A simulation of a solar system with a selection of textured planets and moons orbiting a sun. This sketch was build using p5.js with textures from www.solarsystemscope.com/textures. ",
    technicalDesc:
      "This project concerns several types of rotation. Firstly, each planet rotates on the Y axis around the sun, with varying speed and orbit size but all counter clockwise. Secondly, all planets rotate on the Y axis around their own position, much like the Earth does every day. Likewise, a point light from the sun is created to simulate day and night in this universe. Thirdly, the moon and rings also orbit around their respective planet. The moon rotates on the Y axis, and the ring rotates on the X and Z axes.",
    tags: ["p5.js", "3D", "physics"],
    img: ["images/screenshots/planetOrbits.jpg"],
    url: ["https://openprocessing.org/sketch/1581050"],
    reflection:
      "Despite apparent major differences between this sketch and Rotating Tumblers, there are a lot of shared aspects between the two sketches. For example, the functionality of rotating an element around the origin is replicated here as the planets orbit the sun which has been drawn on (0,0,0). This was an interesting sketch to build and is all the more impressive for the high quality textures to make the worlds more lifelike.",
    instructions: "",
  },
  {
    id: 14,
    title: "Starfield",
    project: "Starfield",
    artisticDesc:
      "A series of sketches simulating the POV of moving through space at hyperspeed. The appearance of stars flying by as the user traverses space is a simple yet effective animation to produce, with a lot of extra functionality that can be added. There are two sketches in this project: one in 2D and the other in 3D.",
    technicalDesc:
      "These particle systems involve the generating of lines (2D) and boxes (3D) at one side of the canvas before incrementally moving them. When they are off screen or behind the camera, then they are deleted and a new particle is generated at the starting point. This allows for infinite visual effects of movement with a generally small number of particles. Other, stationary, shapes are drawn 'in the distance' as stars to enhance the visual effect of a space system. The appearance of depth is created through particle size being dependent on speed, so that closer particles appear to be moving slower.",
    tags: [
      "2D",
      "3D",
      "p5.js",
      "animation",
      "particle system",
      "vectors",
      "JavaScript",
    ],
    img: [
      "images/screenshots/starfield3D.jpg",
      "images/screenshots/starfield2D.jpg",
    ],
    url: [
      "https://openprocessing.org/sketch/1551984",
      "https://openprocessing.org/sketch/1548008",
    ],
    reflection:
      "I came to these sketches quite late on in my p5.js journey. The were recommended as a starting project but I went the way of random walkers and 3D before getting here. As such, I was pleasantly surpised at how easy I found them and the ease at which I could develop really effective sketches. Even so, they provide a clear example of particle systems and were fun to make.",
    instructions: "Use 'w' to speed up and 's' to slow down",
  },
  {
    id: 15,
    title: "Circle Packing",
    project: "Circle Packing",
    artisticDesc:
      "Randomly generated circles packed into a canvas, plugged into an algorithm that means they cannot overlap with any other circles.",
    technicalDesc:
      "The distance between the edges of each new circle is calculated against the position of every circle that has previously been generated. If a collision is detected, then the circle is not drawn onto the sketch. Circle diamater is pseudo-randomly generated based on a gaussian distribution. The sketch is automatically regenerated every second.",
    tags: ["p5.js", "2D", "algorithms", "collision detection", "JavaScript"],
    img: ["images/screenshots/circlePacking.jpg"],
    url: ["https://openprocessing.org/sketch/1544664"],
    reflection:
      "This sketch was created to solve the problem of overlapping elements when using collision detection. Igt involves a step-by-step algorithm to avoid such collisions. It can be developed further to attempt circle position regeneration when a collision is detected in a while loop, with a regulatory counter to avoid infinite loops.",
    instructions: "",
  },
  {
    id: 16,
    title: "Rotating Tumblers",
    project: "Rotating Tumblers",
    artisticDesc:
      "A selection of scaled spinning arcs with their own rotation around the centre, coloured randomly from a palette.",
    technicalDesc:
      "Systematically spaced arcs which rotate clockwise or counter-clockwise, depending on a random selection decided at arc creation, with a random speed. Colour is assigned randomly at this stage from a palette.",
    tags: ["p5.js", "animation", "2D", "JavaScript"],
    img: ["images/screenshots/rotation.jpg"],
    url: ["https://openprocessing.org/sketch/1506703"],
    reflection:
      "Rotation is one of the harder concepts in p5.js and so this sketch acts as a baseline for working with rotation. Having each tumbler have it's own rotation is a step up on having all tumblers have the same rotation, which gives another dimension to the sketch.",
    instructions: "Press spacebar to reset",
  },
  {
    id: 17,
    title: "TV Database",
    project: "TV Database",
    artisticDesc:
      "A front-end React app utilising the TVMaze API to organise information regarding popular TV shows and series.",
    technicalDesc:
      "This front-end application is built in TypeScript with React and fetches information from an API and displays the series and show data in React components. Users can explore the content and add shows to a favourites list.",
    tags: ["react", "TypeScript", "frontend", "CSS", "API"],
    img: ["images/screenshots/tvdatabase.jpg"],
    url: [
      "https://tv-shows-info.netlify.app/",
      "https://github.com/owen-dearman/react-tv-shows",
    ],
    reflection:
      "This was a paired project of which I was a part, completed about halfway through the fulltime scholarship at Academy. I still go back to this project to recap on various aspects of React that I haven't needed in a while. This was also one of my first experiences at paired programming.",
    instructions: "",
  },
  {
    id: 18,
    title: "Infinite City Driver",
    project: "Infinite City Driver",
    artisticDesc:
      "An animation of a cartoon style car driving along an infinitely generating road amongst city skyscrapers. The aesthetics of the car are designed to relate to the Transformer 'Bumblebee'.",
    technicalDesc:
      "Built using nothing by p5.js, this animation involves many components to build: the car, the buildings, road, and plane. Much like the starfield, the elements are only drawn as long as they are in frame. After that, they are deleted. The plane is an optical illusion in that it is not actually moving under the car, nor is the car moving over it. The window width is mapped to the width of the road in order to normalise the steering for the user.",
    tags: ["3D", "animation", "p5.js", "JavaScript"],
    img: ["images/screenshots/citydriver.jpg"],
    url: ["https://openprocessing.org/sketch/1536247"],
    reflection:
      "This was a fun project to undertake and took some mental gymnastics to work out how all the different components fit together to produce an effective sketch. One of the best parts was using relative translation in order to place each component of the car. This means that each component is placed relative to the last one, as opposed to being place relative to the origin.",
    instructions: "Move the mouse along the X axis to steer the car.",
  },
  {
    id: 19,
    title: "Object Manipulation",
    project: "Object Manipulation",
    artisticDesc:
      "This sketch began life as a stationary cluster of boxes, floating in the nether. In this project, functionality has been added that allows the boxes to move, rotate, grow and shrink, and produce interesting shapes such as a solitary cube, or a sphere.",
    technicalDesc:
      "The aim of this project was to practice manipulating object storage.The lerp() method is used to transition a box from one orientation or position to another, with the user pressing various keys to update the relevant target positions. There are a number of unique patterns that the user can create using a selection of commands.",
    tags: ["p5.js", "3D"],
    img: ["images/screenshots/objectManipulation.jpg"],
    url: ["https://openprocessing.org/sketch/1520468"],
    reflection:
      "This sketch was a useful introduction to vectors and some of the methods that can be conducted upon them. Furthermore, it was not a particularly complicated design like some of the other 3D projects here, and so it allowed me to focus on the algorithms and methods rather than visuals.",
    instructions: "",
  },
  {
    id: 20,
    title: "Baby Names App",
    project: "Baby Names",
    artisticDesc:
      "A front-end application for users to produce a favourites list of baby names, search for names, filter by gender, and download their picked names.",
    technicalDesc:
      "A frontend application built in TypeScript with React based around useStates and filtering an array of objects (baby names). This is a very early project undertaken during the fulltime scholarship at Academy and contains no backend persistence or API conenction.",
    tags: ["react", "TypeScript", "front-end", "CSS", "frontend"],
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
    id: 21,
    title: "Favourite Places",
    project: "Favourite Places",
    artisticDesc:
      "My first frontend project which details a selection of my favourite places. ",
    technicalDesc:
      "This app is built using React and TypeScript and contains no persistance. It uses the map() function to iterate through a json document containing the details of each place, transforming them into JSX elements.",
    tags: ["react", "frontend", "TypeScript"],
    img: ["images/screenshots/favPlaces.jpg"],
    url: [
      "https://owen-fav-places.netlify.app/",
      "https://github.com/owen-dearman/favourite-places/tree/main/src/components",
    ],
    reflection:
      "The start of a journey! This app was made after the first week of learning React and I've included it here as it highlights the improvement in my skills over a relatively short space of time. It also shows some experimentation I've done with CSS to see what exactly is possible.",
    instructions: "",
  },
];
