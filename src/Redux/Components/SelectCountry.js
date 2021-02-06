import React, { Component } from "react";
import { connect } from "react-redux";
import countryList from "../../coutryDetails.json";
import { loadCountryInfo } from "../Reducers/SelectReducer";
import Select from "react-select";
import colourStyles from "../../ReactSelectStyle";
class SelectCounty extends Component {
  getFilteredCountry = (countryList) => {
    const { country } = this.props.countryDetails;
    console.log(this.props);
    const filteredCountry = countryList.filter((c) => c.name === country)[0];
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

  render() {
    const { country } = this.props.countryDetails;
    return (
      <div>
        <div className="text-box">
          <h1 className="section-primary">
            <span className="section-primary-main">Country</span>
            <span className="section-primary-sub ">Search By Country Name</span>
          </h1>
        </div>
        <div className="select_container">
          <Select
            label="Single select"
            options={countryList.map((i) => ({
              value: i.name,
              label: i.name + " - " + i.code,
            }))}
            styles={colourStyles}
            onChange={(e) => this.props.loadCountryInfo("country", e.value)}
          />
          {country && this.getFilteredCountry(countryList)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  countryDetails: state.CountryDetails,
});
const mapDisptachToProps = { loadCountryInfo };

export default connect(mapStateToProps, mapDisptachToProps)(SelectCounty);
