import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import NameInput from "./NameInput";
import CareerInput from "./CareerInput";
import MultiInputForm from "./Test";

function App() {
  return (
    <>
      <Nav />
      <main>
        <NameInput />
        <CareerInput />
      </main>
    </>
  );
}

export default App;
