import keySet from "./keySet";

export default function ListDetails({ user }) {
  const userInfo = Object.entries(user).map(([key, value]) => (
    <div key={key}>
      {keySet(key)} : {value}
    </div>
  ));
  return <section>{userInfo}</section>;
}
