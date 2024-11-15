// Creates text for the title based on the key passed

const keySet = (key) => {
  const formatName = key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });
  if (formatName.includes("Tel")) {
    return "Contact Number";
  }
  return formatName;
};

export default keySet;
