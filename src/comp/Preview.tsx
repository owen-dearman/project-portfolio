import PrintArtDiagonalSquare from "../utils/PrintArtDiagonalSquares";
import PrintArtVerticalBars from "../utils/printArtVerticleBars";

export function Preview(): JSX.Element {
  const sketchTitles = ["print1", "print2"];
  const r = sketchTitles[Math.floor(Math.random() * sketchTitles.length)];

  return (
    <div style={{ textAlign: "center" }}>
      {r === "print1" && <PrintArtDiagonalSquare />}
      {r === "print2" && <PrintArtVerticalBars />}
    </div>
  );
}
