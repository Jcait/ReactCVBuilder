import keySet from "./keySet";
import typeSet from "./typeSet";

export default function Form({ user, formName, handleChange, handleSubmit }) {
  const userInfo = Object.entries(user).map(([key, value]) => (
    <p key={key}>
      <label htmlFor={key}>{keySet(key)}</label>
      {key.toLowerCase().includes("desc") ? (
        <textarea
          name={key}
          id={key}
          className={key}
          value={value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          name={key}
          id={key}
          className={key}
          type={typeSet(key)}
          value={value}
          onChange={handleChange}
        ></input>
      )}
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
