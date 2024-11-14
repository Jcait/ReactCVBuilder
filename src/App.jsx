import { useState } from "react";

import "./App.css";
import Nav from "./Nav";
import NameInput from "./NameInput";
import CareerInput from "./CareerInput";

import Details from "./Details";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Details />
      </main>
    </>
  );
}

export default App;
