export default function SubmitButton({ formName }) {
  return (
    <button type="submit" form={formName}>
      Submit
    </button>
  );
}
