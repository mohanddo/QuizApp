import { Routes, Route, useLocation } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import Home from "./Components/Home/Home";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
// import Score from "./Components/Score/Score";
import styles from "./App.module.css";
import { ReactComponent as AccessibilityIcon } from "./assets/images/icon-accessibility.svg";
import { ReactComponent as HtmlIcon } from "./assets/images/icon-html.svg";
import { ReactComponent as JsIcon } from "./assets/images/icon-js.svg";
import { ReactComponent as CssIcon } from "./assets/images/icon-css.svg";

function App() {
  const location = useLocation();
  const subject = location.pathname.split("/")[2];
  let subjectIcon;
  switch (subject) {
    case "Accessibility":
      subjectIcon = <AccessibilityIcon />;
      break;

    case "HTML":
      subjectIcon = <HtmlIcon />;
      break;

    case "JavaScript":
      subjectIcon = <JsIcon />;
      break;

    case "CSS":
      subjectIcon = <CssIcon />;
      break;

    default:
      break;
  }

  return (
    <>
      <div className={styles.header}>
        {(location.pathname === "/score" || typeof subject != "undefined") && (
          <>
            {subjectIcon}
            <h1 className={styles.SubjectHeader}>{subject}</h1>
          </>
        )}
        <ThemeSwitcher />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Questions/:subject"
          element={<Questions subject={subject} />}
        />
        {/* <Route path="/Score" element={<Score />} /> */}
      </Routes>
    </>
  );
}

export default App;
