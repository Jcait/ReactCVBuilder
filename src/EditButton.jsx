export default function EditButton({ isPressed }) {
  return (
    <button type="submit" onClick={isPressed}>
      Edit
    </button>
  );
}
