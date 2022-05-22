import CirclePacking from "../utils/sketches/circlePacking";
import DaveTheWorm from "../utils/sketches/daveTheWorm";
import PlanetOrbits from "../utils/sketches/planetOrbits";
import PrintArtAnimate from "../utils/sketches/printArtAnimate";
import PrintArtChaos from "../utils/sketches/printArtChaos";
import PrintArtCheck from "../utils/sketches/printArtCheck";
import PrintArtCircuit from "../utils/sketches/printArtCircuit";
import PrintArtDiagonalSquare from "../utils/sketches/PrintArtDiagonalSquares";
import PrintArtVerticalBars from "../utils/sketches/printArtVerticleBars";
import PrintArtWeave from "../utils/sketches/printArtWeave";
import RotatingTumblers from "../utils/sketches/rotatingTumblers";
import SymmetryX4 from "../utils/sketches/symmetryX4";

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
  ];
  const r = sketchTitles[Math.floor(Math.random() * sketchTitles.length)];

  return (
    <div style={{ textAlign: "center" }}>
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
    </div>
  );
}
