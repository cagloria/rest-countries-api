import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../css/Borders.css";

function Borders({ borders }) {
    const [names, setNames] = useState([]);
    const [error, setError] = useState("");

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
                var items = [];
                data.forEach((country) => {
                    items.push(country.name);
                });
                setNames(items);
            }).fail(function (xhr, status, error) {
                setError(`Error ${xhr.status}: ${xhr.responseJSON.message}`);
            });
        }
    }, [borders]);

    /**
     * Removes any parentheses in the link.
     * @param {String} link Link
     * @returns             New link without parentheses
     */
    function removeParentheses(link) {
        return link.replace("(", "").replace(")", "");
    }

    const bordersEl =
        names.length > 0 ? (
            <>
                <p className="borders__label">
                    <strong>Border Countries:</strong>
                </p>
                <ul className="borders__ul">
                    {names.map((name) => (
                        <li key={name}>
                            <Link
                                to={`/${removeParentheses(name)}`}
                                className="button-link element"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        ) : (
            <p className="borders__label">
                <strong>Border Countries:</strong> N/A
            </p>
        );

    return (
        <div className="borders">
            {error.length > 0 ? (
                <p>There was a problem requesting border data: {error}</p>
            ) : (
                bordersEl
            )}
        </div>
    );
}

export default Borders;
