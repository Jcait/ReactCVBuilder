import { useState } from "react";

export default function CareerInput() {
  const [careerDetails, setCareerDetails] = useState("");
  function CareerForm() {
    return (
      <>
        {" "}
        <form>
          <label htmlFor="jobname">Job Name</label>
          <input type="text" name="jobname" id="jobname"></input>
          <label htmlFor="startdate">Start Date</label>
          <input type="date" name="startdate" id="startdate"></input>
          <label>End Date</label>
          <input type="date" name="enddate" id="enddate"></input>
          <label htmlFor="jobdesc">Job Details</label>
          <textarea name="jobdesc" id="jobdesc"></textarea>
        </form>
      </>
    );
  }
  return (
    <>
      <h1>Career Stuff</h1>
      <CareerForm />
    </>
  );
}
