import React from "react";

function Country({ obj }) {
    const { flag, name, population, region, capital } = obj;

    return (
        <li className="country">
            <img src={flag} alt={`Flag of ${name}`} className="country__flag" />
            <div className="country__details">
                <h2>{name}</h2>
                <p>
                    <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p>
                    <strong>Region:</strong> {region.length > 0 ? region : "N/A"}
                </p>
                <p>
                    <strong>Capital:</strong> {capital.length > 0 ? capital : "N/A"}
                </p>
            </div>
        </li>
    );
}

export default Country;
