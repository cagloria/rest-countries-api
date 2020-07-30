import React from "react";
import { Link } from "react-router-dom";
import "../css/Country.css";

function Country({ obj }) {
    const { flag, name, population, region, capital } = obj;

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
     * Removes any parentheses in the link.
     * @param {String} link Link
     * @returns             New link without parentheses
     */
    function removeParentheses(link) {
        return link.replace("(", "").replace(")", "");
    }

    return (
        <li className="country element">
            <div className="country__flag-wrapper">
                <img
                    src={flag}
                    alt={`Flag of ${name}`}
                    className="country__flag"
                />
            </div>
            <div className="country__details">
                <h2>
                    <Link to={`/${removeParentheses(name)}`}>{name}</Link>
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
