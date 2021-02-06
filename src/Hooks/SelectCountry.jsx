import React from "react";
import countryDetails from "../coutryDetails";
import Select from "react-select";
import colourStyles from "../ReactSelectStyle";

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
        options={countryDetails.map((i) => ({
          value: i.name,
          label: i.name + " - " + i.code,
        }))}
        styles={colourStyles}
        onChange={(e) => setCountryInput(e.value)}
      />
      {country && getFilteredCountry(countryDetails)}
    </div>
  );
};
