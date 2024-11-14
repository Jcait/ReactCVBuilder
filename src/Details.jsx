import { useState } from "react";
import Form from "./Form";

export default function Details() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>{person.firstName}</h1>
      <Form user={person} formName={"detailForm"} handleChange={handleChange} />
      ;
    </>
  );
}
