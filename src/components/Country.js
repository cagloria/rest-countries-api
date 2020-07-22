import React from "react";

function Country({ obj }) {
    return (
        <li>
            <img
                src={obj.flag}
                alt={`Flag of ${obj.flag}`}
                width="300"
                height="200"
            />
            <h2>{obj.name}</h2>
            <p>
                <strong>Population:</strong> {obj.population.toLocaleString()}
            </p>
            <p>
                <strong>Region:</strong> {obj.region}
            </p>
            <p>
                <strong>Capital:</strong> {obj.capital}
            </p>
        </li>
    );
}

export default Country;
