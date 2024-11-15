import { useState } from "react";

import "./App.css";
import Nav from "./Nav";

import Details from "./Details";
import CareerDetails from "./CareerDetails";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Details />
        <CareerDetails />
      </main>
    </>
  );
}

export default App;
