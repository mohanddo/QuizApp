import { Routes, Route } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questions/:subject" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
