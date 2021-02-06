import React from "react";
import "./index.css";
import { useState } from "react";
import SelectCountryHooks from "./Hooks/SelectCountry";
import countryDetails from "./coutryDetails.json";
import SelectCountry from "./Redux/Components/SelectCountry";
export default function App() {
  const [country, setCountryInput] = useState({
    name: "",
    code: "",
    description: "",
  });
  const [customStyle, toggleCustomState] = useState(true);
  const getCountryDetails = (country) => {
    const filteredList = countryDetails.filter((i) =>
      i.name.toLocaleLowerCase().startsWith(country.name.toLowerCase())
        ? i
        : null
    );
    return filteredList.length > 0 ? (
      filteredList.map((i) => (
        <div
          className="country_section_list"
          onClick={() => setCountryInput(i)}
          key={i.code}
        >
          <span className="name_section">{i.name}</span>
          <span className="code_section">{i.code}</span>
        </div>
      ))
    ) : (
      <div className="text-white">No Record Found</div>
    );
  };
  return (
    <>
      <section className="section">
        <button
          className="toggle-btn"
          onClick={() => toggleCustomState(!customStyle)}
        >
          {customStyle ? "Custom" : "Library"}
        </button>
        {customStyle ? (
          <>
            <div className="text-box">
              <h1 className="section-primary">
                <span className="section-primary-main">Country</span>
                <span className="section-primary-sub ">
                  Search By Country Name
                </span>
              </h1>
              <input
                className="input-box input-animated"
                value={country.name}
                onChange={(e) => setCountryInput({ name: e.target.value })}
              />
            </div>
            <div className="container_list">
              {country.name &&
                !country.description &&
                getCountryDetails(country)}
            </div>

            {country.description && (
              <div className="description_container">
                <h1>{country.name}</h1>
                <h3 style={{ textAlign: "left" }}>Description</h3>
                <div className="des_text">{country.description}</div>
              </div>
            )}
          </>
        ) : (
          // <SelectCountryHooks /> Simple Hook
          <SelectCountry />
        )}
      </section>
    </>
  );
}
