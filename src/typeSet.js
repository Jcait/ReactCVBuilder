// Sets the form type based on the key
const typeSet = (key) => {
  if (key.toLowerCase().includes("email")) {
    return "email";
  } else if (key.toLowerCase().includes("tel")) {
    return "tel";
  } else if (key.toLowerCase().includes("date")) {
    return "date";
  }

  return "text";
};

export default typeSet;
