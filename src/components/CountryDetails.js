import React from "react";
import { Link } from "react-router-dom";
import Borders from "./Borders";
import "../css/CountryDetails.css";

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
     * Returns the array as a string with each element separated by commas.
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
        <section className="country-details-section country-details">
            <Link to="/" className="button-link button-link--icon element">
                <ion-icon
                    name="arrow-back-outline"
                    aria-hidden="true"
                ></ion-icon>{" "}
                Back
            </Link>

            <img
                src={flag}
                alt={`Flag of ${name}`}
                className="country-details__flag"
            />

            <h2 className="country-details__header">{name}</h2>

            <div className="country-details__text">
                <div>
                    <p>
                        <strong>Native Name:</strong> {nativeName}
                    </p>
                    <p>
                        <strong>Population:</strong>{" "}
                        {population.toLocaleString()}
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
                </div>

                <div>
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
            </div>

            <Borders borders={borders} />
        </section>
    );
}

export default CountryDetails;
