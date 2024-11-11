import { useState } from "react";

export default function NameInput() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const fNameChange = () => {
    const newName = document.querySelector(".nameForm").value;
    const newFName = { ...person, firstName: newName };
    setPerson(newFName);
  };

  return (
    <section>
      <h4>Please enter your name</h4>
      <h4>{"First Name: " + person.firstName}</h4>
      <input
        className="nameForm"
        placeholder="Please enter your first name"
        type="text"
      ></input>
      <button type="button" onClick={fNameChange}>
        Test
      </button>
    </section>
  );
}
