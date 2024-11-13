import { useState } from "react";

export default function CareerInput() {
  const [careerDetails, setCareerDetails] = useState({
    jobname: "",
    startdate: "",
    enddate: "",
    jobdesc: "",
  });

  const [isPressed, setIsPressed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPressed(!isPressed);
  };

  return (
    <>
      {isPressed ? (
        <>
          <h4>{`Name of Job: ${careerDetails.jobname}`}</h4>
          <h4>{`Start Date: ${careerDetails.startdate}`}</h4>
          <h4>{`End Date: ${careerDetails.enddate}`}</h4>
          <h4>{`Job Details : ${careerDetails.jobdesc}`}</h4>
          <button onClick={handleSubmit}>Edit</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="jobname">Job Name</label>
          <input
            type="text"
            name="jobname"
            id="jobname"
            value={careerDetails.jobname}
            onChange={handleChange}
          ></input>
          <label htmlFor="startdate">Start Date</label>
          <input
            type="date"
            name="startdate"
            id="startdate"
            value={careerDetails.startdate}
            onChange={handleChange}
          ></input>
          <label>End Date</label>
          <input
            type="date"
            name="enddate"
            id="enddate"
            value={careerDetails.enddate}
            onChange={handleChange}
          ></input>
          <label htmlFor="jobdesc">Job Details</label>
          <textarea
            name="jobdesc"
            id="jobdesc"
            value={careerDetails.jobdesc}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}{" "}
    </>
  );
}
