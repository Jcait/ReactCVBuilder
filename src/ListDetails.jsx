import keySet from "./keySet";

export default function ListDetails({ user, sectionName }) {
  const userInfo = Object.entries(user).map(([key, value]) => (
    <div key={key}>
      <p>
        {keySet(key)} : {value}
      </p>
    </div>
  ));
  return <section className={sectionName}>{userInfo}</section>;
}
