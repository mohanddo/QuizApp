import { ReactComponent as AccessibilityIcon } from "../../assets/images/icon-accessibility.svg";
import { ReactComponent as HtmlIcon } from "../../assets/images/icon-html.svg";
import { ReactComponent as JsIcon } from "../../assets/images/icon-js.svg";
import { ReactComponent as CssIcon } from "../../assets/images/icon-css.svg";
import { Link } from "react-router-dom";
import "./Home.module.css";

function Home() {
  return (
    <>
      <h1>
        Welcome to the <span>Frontend Quiz!</span>
      </h1>
      <h3>Pick a subject to get started</h3>

      <nav>
        <ul>
          <li>
            <HtmlIcon />
            <Link to="/Questions/HTML">HTML</Link>
          </li>
          <li>
            <CssIcon />
            <Link to="/Questions/CSS">CSS</Link>
          </li>
          <li>
            <JsIcon />
            <Link to="/Questions/JavaScript">JavaScript</Link>
          </li>
          <li>
            <AccessibilityIcon />
            <Link to="/Questions/Accessibility">Accessibility</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
