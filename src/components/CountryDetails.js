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

    function stringExists(string) {
        return string.length > 0 ? string : "N/A";
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
                    <strong>Currencies</strong>{" "}
                    {currencies.map((currency) => `${currency.name}, `)}
                </p>
                <p>
                    <strong>Languages</strong>{" "}
                    {languages.map((lang) => `${lang.name}, `)}
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
