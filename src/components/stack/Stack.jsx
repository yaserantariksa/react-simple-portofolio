import "./stack.css";
import ReactLogo from "../../img/react.svg";
import FlutterLogo from "../../img/flutter.svg";
import FirebaseLogo from "../../img/firebase.svg";

function Stack() {
  return (
    <div className="stack">
      <h1 className="stack-tittle">My Stack</h1>
      <div className="stack-list">
        <div className="stack-item">
          <img src={ReactLogo} alt="" className="stack-logo" />
          <h2>React</h2>
        </div>
        <div className="stack-item">
          <img src={FlutterLogo} alt="" className="stack-logo" />
          <h2>Flutter</h2>
        </div>
        <div className="stack-item">
          <img src={FirebaseLogo} alt="stack logo" className="stack-logo" />
          <h2>Firebase</h2>
        </div>
      </div>
    </div>
  );
}

export default Stack;
