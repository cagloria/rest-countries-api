import React, { useState } from "react";

function RegionSelect({ onRegionSelect }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
        onRegionSelect(event.target.value);
    }

    return (
        <select
            name="region"
            id="region"
            aria-label="Search by region"
            onChange={handleChange}
            value={value}
        >
            <option value="" defaultValue>
                Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default RegionSelect;
