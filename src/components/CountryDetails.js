import React from "react";
import { Link } from "react-router-dom";

function CountryDetails({ obj }) {
    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = obj;

    /**
     * Checks if a string has a length greater than zero. If so, return N/A.
     * Used for countries that do not have a capital/region/sub region, etc.
     * @param {String} string   String to check
     * @returns                 Value of string or "N/A"
     */
    function stringExists(string) {
        return string.length > 0 ? string : "N/A";
    }

    /**
     * Returns a formatted string from an array
     * @param {Object} arr  Array to format
     * @returns             Array formatted into a string
     */
    function formatArray(arr) {
        var string = "";
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                string += arr[i].name;
            } else {
                string += `${arr[i].name}, `;
            }
        }
        return string;
    }

    return (
        <>
            <Link to="/">Back</Link>
            <img src={flag} alt={`Flag of ${name}`} />
            <h2>{name}</h2>

            <div className="country-details__details">
                <p>
                    <strong>Native Name:</strong> {nativeName}
                </p>
                <p>
                    <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p>
                    <strong>Region:</strong> {stringExists(region)}
                </p>
                <p>
                    <strong>Sub Region:</strong> {stringExists(subregion)}
                </p>
                <p>
                    <strong>Capital:</strong> {stringExists(capital)}
                </p>
                <p>
                    <strong>Top Level Domain:</strong> {topLevelDomain}
                </p>
                <p>
                    <strong>Currencies:</strong> {formatArray(currencies)}
                </p>
                <p>
                    <strong>Languages:</strong> {formatArray(languages)}
                </p>
            </div>

            <p>
                <strong>Border Countries:</strong>{" "}
                {borders.length > 0
                    ? borders.map((border) => `${border}, `)
                    : "N/A"}
            </p>
        </>
    );
}

export default CountryDetails;
