import { FC } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
