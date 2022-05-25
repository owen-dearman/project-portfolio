import RainbowTrail from "../utils/sketches/rainbowTrail";
import CirclePacking from "../utils/sketches/circlePacking";
import DaveTheWorm from "../utils/sketches/daveTheWorm";
import PrintArtAnimate from "../utils/sketches/printArtAnimate";
import PrintArtChaos from "../utils/sketches/printArtChaos";
import PrintArtCheck from "../utils/sketches/printArtCheck";
import PrintArtCircuit from "../utils/sketches/printArtCircuit";
import PrintArtDiagonalSquare from "../utils/sketches/PrintArtDiagonalSquares";
import PrintArtVerticalBars from "../utils/sketches/printArtVerticleBars";
import PrintArtWeave from "../utils/sketches/printArtWeave";
import RotatingTumblers from "../utils/sketches/rotatingTumblers";
import SymmetryX4 from "../utils/sketches/symmetryX4";
import ThreeDCube from "../utils/sketches/threeDCube";
import ElectricParticles from "../utils/sketches/electricParticles";
import { useState } from "react";
import { navOptions, projectOptions } from "../App";

type sketchTitleType = { id: number; desc: string; project: projectOptions };

interface PreviewProps {
  setNav: (arg0: navOptions) => void;
  setProjectPage: (arg0: projectOptions) => void;
}

export function Preview(props: PreviewProps): JSX.Element {
  const sketchTitles: sketchTitleType[] = [
    { id: 1, desc: "Commodore 64 style print art.", project: "Print Art" },
    { id: 2, desc: "Commodore 64 style print art.", project: "Print Art" },
    { id: 3, desc: "Commodore 64 style print art.", project: "Print Art" },
    { id: 4, desc: "Commodore 64 style print art.", project: "Print Art" },
    { id: 5, desc: "Commodore 64 style print art.", project: "Print Art" },
    { id: 6, desc: "Commodore 64 style print art.", project: "Print Art" },
    {
      id: 7,
      desc: "Commodore 64 style print art with animated rotation. Press spacebar to reset and 'z' to change colour palette",
      project: "Print Art",
    },
    {
      id: 8,
      desc: "Self resetting sketch of circles packed to avoid overlap",
      project: "Circle Packing",
    },
    {
      id: 9,
      desc: "Random walker worm. Click on the canvas to move worm to that position",
      project: "Single Worm Walker",
    },
    {
      id: 10,
      desc: "Random rotating arcs. Press spacebar to reset.",
      project: "Rotating Tumblers",
    },
    {
      id: 11,
      desc: "Four way symmetrical drawing. Move the mouse around the canvas to draw a picture.",
      project: "Trail Drawing",
    },
    {
      id: 12,
      desc: "Spheres bouncing around the inside of a box with rotating camera. Press '1' to remove all spheres and '2' to add more spheres.",
      project: "3D Box With Spheres",
    },
    {
      id: 13,
      desc: "Draw a rainbow picture. Press 'd' and move the mouse around the canvas.",
      project: "Trail Drawing",
    },
    {
      id: 14,
      desc: "Electric particles that connect when close. Move the mouse to join to particles.",
      project: "Electric Particles",
    },
  ];

  const sketch = sketchTitles[Math.floor(Math.random() * sketchTitles.length)];
  const [currentSketch, setCurrentSketch] = useState<sketchTitleType>(sketch);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() =>
          setCurrentSketch(
            sketchTitles[Math.floor(Math.random() * sketchTitles.length)]
          )
        }
      >
        Show Me A New One!
      </button>
      <button
        onClick={() =>
          window.alert(`${currentSketch.project}: ${currentSketch.desc}`)
        }
      >
        What Is This One?
      </button>
      <button
        onClick={() => {
          props.setNav("projects");
          props.setProjectPage(currentSketch.project);
        }}
      >
        Take Me To This One!
      </button>
      <hr></hr>
      {currentSketch.id === 1 && <PrintArtDiagonalSquare />}
      {currentSketch.id === 2 && <PrintArtVerticalBars />}
      {currentSketch.id === 3 && <PrintArtCircuit />}
      {currentSketch.id === 4 && <PrintArtWeave />}
      {currentSketch.id === 5 && <PrintArtCheck />}
      {currentSketch.id === 6 && <PrintArtChaos />}
      {currentSketch.id === 7 && <PrintArtAnimate />}
      {currentSketch.id === 8 && <CirclePacking />}
      {currentSketch.id === 9 && <DaveTheWorm />}
      {currentSketch.id === 10 && <RotatingTumblers />}
      {currentSketch.id === 11 && <SymmetryX4 />}
      {currentSketch.id === 12 && <ThreeDCube />}
      {currentSketch.id === 13 && <RainbowTrail />}
      {currentSketch.id === 14 && <ElectricParticles />}
    </div>
  );
}
