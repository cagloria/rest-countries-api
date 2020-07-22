import React from "react";

function RegionSelect() {
    return (
        <select name="region" id="region" aria-label="Search by region">
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    );
}

export default RegionSelect;
