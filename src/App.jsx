import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <header>Header</header>
        <h1>Main</h1>
        <section>Section</section>
      </main>
    </>
  );
}

export default App;
