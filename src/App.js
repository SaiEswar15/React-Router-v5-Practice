import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.js";
import Pictures from "./Pictures";
import Videos from "./Videos";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/about" exact element={<About />} />
          <Route path="/pictures" exact element={<Pictures />} />
          <Route path="/videos" exact element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
