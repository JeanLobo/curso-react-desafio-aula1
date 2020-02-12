import React from "react";

import "./styles.css";

import { Header } from "./components/Header";
import CepSearch from "./components/CepSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <CepSearch />
    </div>
  );
}

export default App;
