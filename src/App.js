import React from "react";
import Container from "./components/container";
import SideNav from "./components/SideNav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <div>
        <SideNav />
      </div>
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>
        <Home />
      </Container>
    </BrowserRouter>
  );
}

export default App;