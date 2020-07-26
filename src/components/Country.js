import React from "react";
import { Link } from "react-router-dom";

function Country({ obj }) {
    const { flag, name, population, region, capital } = obj;

    function stringExists(string) {
        return string.length > 0 ? string : "N/A";
    }

    return (
        <li className="country">
            <img src={flag} alt={`Flag of ${name}`} className="country__flag" />
            <div className="country__details">
                <h2>
                    <Link to={`/${name}`}>{name}</Link>
                </h2>
                <p>
                    <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p>
                    <strong>Region:</strong> {stringExists(region)}
                </p>
                <p>
                    <strong>Capital:</strong> {stringExists(capital)}
                </p>
            </div>
        </li>
    );
}

export default Country;
