import SubmitButton from "./SubmitButton";

const typeSet = (key) => {
  if (key.includes("email")) {
    return "email";
  } else if (key.includes("tel")) {
    return "tel";
  }

  return "text";
};

export default function Form({ user, formName, handleChange, handleSubmit }) {
  const userInfo = Object.entries(user).map(([key, value]) => (
    <p key={key}>
      <label htmlFor={key}>
        {key.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
          return str.toUpperCase();
        })}
      </label>
      <input
        name={key}
        id={key}
        className={key}
        type={typeSet(key)}
        value={key.value}
        onChange={handleChange}
      ></input>
    </p>
  ));

  return (
    <form
      className={formName}
      id={formName}
      name={formName}
      onSubmit={handleSubmit}
    >
      {userInfo}
    </form>
  );
}
