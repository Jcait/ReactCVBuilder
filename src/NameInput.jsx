import { useState } from "react";

export default function NameInput() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    submitted: false,
  });

  const NameChange = () => {
    const newFName = document.querySelector(".firstName").value;
    const newLName = document.querySelector(".lastName").value;
    const email = document.querySelector(".email").value;
    const tel = document.querySelector(".tel").value;
    const newPerson = {
      ...person,
      firstName: newFName,
      lastName: newLName,
      email: email,
      tel: tel,
      submitted: true,
    };
    setPerson(newPerson);
  };

  const handleSbmit = (e) => {
    e.preventDefault();
    NameChange();
  };

  const editButton = () => {
    const newPerson = {
      ...person,
      submitted: false,
    };
    setPerson(newPerson);
  };

  function NameTitle() {
    return (
      <>
        {person.submitted ? null : <h4>Please enter your details</h4>}

        <h4>{person.firstName ? `First Name: ${person.firstName}` : null}</h4>
        <h4>{person.lastName ? "Last Name: " + person.lastName : null}</h4>
        <h4>{person.email ? "Email: " + person.email : null}</h4>
        <h4>{person.tel ? "Contact No. " + person.tel : null}</h4>
      </>
    );
  }

  function Form() {
    return (
      <>
        <form onSubmit={handleSbmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            id="firstName"
            className="firstName"
            placeholder="Please enter your first name"
            type="text"
          ></input>
          <label htmlFor="name">Last Name</label>
          <input
            name="lastName"
            id="lastName"
            className="lastName"
            placeholder="Please enter your last name"
            type="text"
          ></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            className="email"
            placeholder="email"
            type="email"
          ></input>
          <label htmlFor="tel"></label>
          <input
            name="tel"
            id="tel"
            className="tel"
            placeholder="Contant Number"
            type="tel"
          ></input>

          <button type="submit">Test</button>
        </form>
      </>
    );
  }

  return (
    <section className="nameInput">
      {person.submitted ? (
        <>
          <NameTitle /> <button onClick={editButton}>Edit</button>
        </>
      ) : (
        <>
          <NameTitle /> <Form />
        </>
      )}
    </section>
  );
}
