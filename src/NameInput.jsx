import { useState } from "react";

export default function NameInput() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  });

  const [isPressed, setIsPressed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPressed(!isPressed);
  };

  return (
    <section className="nameInput">
      <>
        {isPressed ? (
          <>
            <h4>
              {person.firstName ? `First Name: ${person.firstName}` : null}
            </h4>
            <h4>{person.lastName ? "Last Name: " + person.lastName : null}</h4>
            <h4>{person.email ? "Email: " + person.email : null}</h4>
            <h4>{person.tel ? "Contact No. " + person.tel : null}</h4>
            <button onClick={handleSubmit}>Edit</button>
          </>
        ) : (
          <>
            <h4>Please enter your details</h4>
            <form
              className="detailForm"
              id="detailForm"
              onSubmit={handleSubmit}
            >
              <p>
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  id="firstName"
                  className="firstName"
                  placeholder="Please enter your first name"
                  value={person.firstName}
                  onChange={handleChange}
                  type="text"
                ></input>
              </p>
              <p>
                <label htmlFor="name">Last Name</label>
                <input
                  name="lastName"
                  id="lastName"
                  className="lastName"
                  placeholder="Please enter your last name"
                  value={person.lastName}
                  onChange={handleChange}
                  type="text"
                ></input>
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  className="email"
                  placeholder="email"
                  value={person.email}
                  onChange={handleChange}
                  type="email"
                ></input>
              </p>
              <p>
                {" "}
                <label htmlFor="tel">Contact Number</label>
                <input
                  name="tel"
                  id="tel"
                  className="tel"
                  placeholder="Contact Number"
                  value={person.tel}
                  onChange={handleChange}
                  type="tel"
                ></input>
              </p>
            </form>
            <div className="detailSubmit">
              <button type="submit" form="detailForm">
                Submit
              </button>
            </div>
          </>
        )}
      </>
    </section>
  );
}
