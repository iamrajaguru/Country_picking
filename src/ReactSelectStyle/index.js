const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#28b485" : isFocused ? "#28b485" : "#fff",
      color: isSelected ? "#fff" : isFocused ? "#fff" : "#28b485",
      ":active": {
        ...styles[":active"],
        backgroundColor: isSelected ? "#fff" : isFocused ? "#fff" : "#28b485",
        color: isSelected ? "#28b485" : isFocused ? "#28b485" : "#fff",
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};
export default colourStyles;
