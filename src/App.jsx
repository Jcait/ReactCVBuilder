import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import NameInput from "./NameInput";

function App() {
  return (
    <>
      <Nav />
      <main>
        <NameInput />
        <NameInput />
      </main>
    </>
  );
}

export default App;
