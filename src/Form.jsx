function Form({ text }) {
  return <h1>{text}</h1>;
}

export default function Test() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  });
  return (
    <>
      <h1>hi</h1>
    </>
  );
}
