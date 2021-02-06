const initialState = {
  name: "",
  code: "",
  description: "",
  country: "",
};

export const loadCountryInfo = (key, value) => ({
  type: "LOAD_COUNTRY_DETAILS",
  key,
  value,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_COUNTRY_DETAILS":
      console.log(action.value);
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
