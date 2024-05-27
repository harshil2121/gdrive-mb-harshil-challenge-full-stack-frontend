import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Analitics from "./Pages/Analitics/Analitics";
import "./App.css";
import "./Pages/assesst/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/analitics" element={<Analitics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
