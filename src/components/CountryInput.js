import React from "react";

function CountryInput({ onCountryInput }) {
    function handleChange(event) {
        onCountryInput(event.target.value);
    }

    return (
        <input
            type="text"
            aria-label="Search for a country"
            placeholder="Search for a country..."
            onChange={handleChange}
        />
    );
}

export default CountryInput;
