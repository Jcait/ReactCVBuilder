import { useState } from "react";

export default function NameInput() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <section>
      <h4>Please enter your name</h4>
      <input placeholder="Please enter your first name" type="text"></input>
      <button type="button">Test</button>
    </section>
  );
}
