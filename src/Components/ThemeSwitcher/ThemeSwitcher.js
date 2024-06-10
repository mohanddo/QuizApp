import React from "react";
import { ReactComponent as Sun } from "../../assets/images/icon-sun-dark.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon-dark.svg";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-Theme", "Dark");
    localStorage.setItem("SelectedTheme", "Dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-Theme", "Light");
    localStorage.setItem("SelectedTheme", "Light");
  };

  const selectedTheme = localStorage.getItem("SelectedTheme");

  if (selectedTheme === "Dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
      console.log("Dark Mode");
    } else {
      setLightMode();
      console.log("Light Mode");
    }
  };

  return (
    <div className={styles.ThemeSwitcher}>
      <input
        className={styles.ThemeSwitcher_input}
        type="checkbox"
        id="ThemeSwitcher_toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "Dark"}
      />
      <Sun />
      <label
        className={styles.ThemeSwitcher_label}
        htmlFor="ThemeSwitcher_toggle"
      ></label>
      <Moon />
    </div>
  );
};

export default ThemeSwitcher;
