import { FC, useReducer, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";

// State
import { LangContext } from "../../state/context/Lang";
import { LangReducer } from "../../state/reducer/Lang";

export const App: FC = () => {
  const [lang, dispatchLang] = useReducer(LangReducer, "en");

  return (
    <LangContext.Provider value={{ lang: lang, dispatchLang }}>
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
    </LangContext.Provider>
  );
};
