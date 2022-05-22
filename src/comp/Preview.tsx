import CirclePacking from "../utils/sketches/circlePacking";
import DaveTheWorm from "../utils/sketches/daveTheWorm";
import PrintArtAnimate from "../utils/sketches/printArtAnimate";
import PrintArtChaos from "../utils/sketches/printArtChaos";
import PrintArtCheck from "../utils/sketches/printArtCheck";
import PrintArtCircuit from "../utils/sketches/printArtCircuit";
import PrintArtDiagonalSquare from "../utils/sketches/PrintArtDiagonalSquares";
import PrintArtVerticalBars from "../utils/sketches/printArtVerticleBars";
import PrintArtWeave from "../utils/sketches/printArtWeave";

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
      {r === "print7" && (
        <div>
          <PrintArtAnimate />
          <h2>Press "z" to change colour. Press spacebar to reset.</h2>
        </div>
      )}
      {r === "circlePacking" && (
        <div style={{ width: "90%" }}>
          <CirclePacking />
        </div>
      )}
      {r === "DaveTheWorm" && <DaveTheWorm />}
    </div>
  );
}
