import { useState } from "react";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function Details() {
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
    console.log(isPressed);
  };

  return (
    <>
      <h1>{person.firstName}</h1>
      <Form
        user={person}
        formName={"detailForm"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <SubmitButton formName={"detailForm"} />;
    </>
  );
}
