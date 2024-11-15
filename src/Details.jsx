import { useState } from "react";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import ListDetails from "./ListDetails";
import EditButton from "./EditButton";

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
      {" "}
      <section>
        {isPressed ? (
          <>
            {" "}
            <ListDetails user={person} />
            <EditButton isPressed={handleSubmit} />
          </>
        ) : (
          <>
            {" "}
            <Form
              user={person}
              formName={"detailForm"}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <SubmitButton formName={"detailForm"} />
          </>
        )}
      </section>
    </>
  );
}
