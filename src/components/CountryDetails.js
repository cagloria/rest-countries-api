import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../css/CountryDetails.css";

function CountryDetails({ obj }) {
    const [bordersEl, setBordersEl] = useState("N/A");
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

    useEffect(() => {
        if (borders.length > 0) {
            // Formats string of borders into codes the API will accept
            var codes = "";
            for (let i = 0; i < borders.length; i++) {
                if (i === borders.length - 1) {
                    codes += borders[i];
                } else {
                    codes += `${borders[i]};`;
                }
            }
            const url = `https://restcountries.eu/rest/v2/alpha?codes=${codes}`;

            $.get(url, function (data) {
                var listItems = [];
                data.forEach((country) => {
                    listItems.push(
                        <Link
                            key={country.name}
                            to={`/${removeParentheses(country.name)}`}
                            className="button-link"
                        >
                            {country.name}
                        </Link>,
                        " "
                    );
                });
                setBordersEl(listItems.map((item) => item));
            }).fail(function (xhr, status, error) {
                console.log(`Error ${xhr.status}: ${xhr.responseJSON.message}`);
            });
        }
    }, [borders]);

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

    /**
     * Removes any parentheses in the link.
     * @param {String} link Link
     * @returns             New link without parentheses
     */
    function removeParentheses(link) {
        return link.replace("(", "").replace(")", "");
    }

    return (
        <section className="country-details">
            <Link to="/" className="button-link">
                ← Back
            </Link>

            <img
                src={flag}
                alt={`Flag of ${name}`}
                className="country-details__flag"
            />

            <h2>{name}</h2>

            <div className="country-details__details-1">
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
            </div>

            <div className="country-details__details-2">
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

            {/* <p className="borders">
                <strong className="borders__header">Border Countries:</strong>{" "}
            </p> */}
            {bordersEl}
        </section>
    );
}

export default CountryDetails;
