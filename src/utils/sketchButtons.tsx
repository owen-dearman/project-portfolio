import { sketchButtonObject } from "./imageLinkToOb";

interface SketchButtonsProps {
  data: sketchButtonObject[];
}

export function SketchButtons(props: SketchButtonsProps): JSX.Element {
  return (
    <div>
      {" "}
      {props.data.map((x) => (
        <div key={x.link} className="launch">
          <img
            className="overviewImage"
            src={x.img}
            alt={`screenshot of Electric Particles 1`}
          />
          <button
            style={{ margin: "10px 0px" }}
            onClick={() => window.open(x.link)}
          >
            Go To Sketch
          </button>
        </div>
      ))}
    </div>
  );
}
