import React from "react";

import countryDetails from "./coutryDetails";
import Select from "react-select";

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

export default () => {
  const [country, setCountryInput] = React.useState();
  const getFilteredCountry = (countryDetails) => {
    const filteredCountry = countryDetails.filter((c) => c.name === country)[0];
    return filteredCountry.name ? (
      <div className="description_container_">
        <h1>{filteredCountry.name}</h1>
        <h3 style={{ textAlign: "left" }}>Description</h3>
        <div className="des_text">{filteredCountry.description}</div>
      </div>
    ) : (
      <div>No Record Found</div>
    );
  };
  return (
    <div className="select_container">
      <Select
        label="Single select"
        options={countryDetails.map((i) => ({ value: i.name, label: i.name }))}
        styles={colourStyles}
       
        onChange={(e) => setCountryInput(e.value)}
      />
      {country && getFilteredCountry(countryDetails)}
    </div>
  );
};
