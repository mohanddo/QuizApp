import { Link } from "react-router-dom";
import "./Home.module.css";

function Home() {
  return (
    <>
      <header>
        <h1>
          Welcome to the <span>Front-end Quiz!</span>
        </h1>
        <h3>Pick a subject to get started</h3>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/Questions/HTML">HTML</Link>
          </li>
          <li>
            <Link to="/Questions/CSS">CSS</Link>
          </li>
          <li>
            <Link to="/Questions/JavaScript">JavaScript</Link>
          </li>
          <li>
            <Link to="/Questions/Accessibility">Accessibility</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
