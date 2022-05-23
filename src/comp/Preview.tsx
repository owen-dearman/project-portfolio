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

export function Preview(): JSX.Element {
  const sketchTitles = [
    "print1",
    "print2",
    "print3",
    "print4",
    "print5",
    "print6",
    "print7",
    "circlePacking",
    "DaveTheWorm",
    "rotatingTumblers",
    "symmetryX4",
    "threeDCube",
    "rainbowTrail",
    "electricParticles",
  ];
  const r = sketchTitles[Math.floor(Math.random() * sketchTitles.length)];
  const [currentSketch, setCurrentSketch] = useState<string>(r);

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
      <button onClick={() => window.alert(currentSketch)}>
        What Is This One?
      </button>
      <button>Take Me To This One!</button>
      <hr></hr>
      {r === "print1" && <PrintArtDiagonalSquare />}
      {r === "print2" && <PrintArtVerticalBars />}
      {r === "print3" && <PrintArtCircuit />}
      {r === "print4" && <PrintArtWeave />}
      {r === "print5" && <PrintArtCheck />}
      {r === "print6" && <PrintArtChaos />}
      {r === "print7" && <PrintArtAnimate />}
      {r === "circlePacking" && <CirclePacking />}
      {r === "DaveTheWorm" && <DaveTheWorm />}
      {r === "rotatingTumblers" && <RotatingTumblers />}
      {r === "symmetryX4" && <SymmetryX4 />}
      {r === "threeDCube" && <ThreeDCube />}
      {r === "rainbowTrail" && <RainbowTrail />}
      {r === "electricParticles" && <ElectricParticles />}
    </div>
  );
}
