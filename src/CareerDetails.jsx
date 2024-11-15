import { useState } from "react";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import ListDetails from "./ListDetails";
import EditButton from "./EditButton";

export default function CareerDetails() {
  const [career, setCareer] = useState({
    jobName: "",
    startDate: "",
    endDate: "",
    jobDesc: "",
  });

  const [isPressed, setIsPressed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareer((prevState) => ({
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
    <section>
      {isPressed ? (
        <>
          {" "}
          <ListDetails sectionName={"careerDetails"} user={career} />
          <EditButton isPressed={handleSubmit} />
        </>
      ) : (
        <>
          <Form
            user={career}
            formName={"careerForm"}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />{" "}
          <SubmitButton formName={"careerForm"} />
        </>
      )}
    </section>
  );
}
