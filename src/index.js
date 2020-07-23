import React, { useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ThemeSwitch from "./components/ThemeSwitch";
import NameInput from "./components/NameInput";
import RegionSelect from "./components/RegionSelect";
import Country from "./components/Country";
import "./css/index.css";

function App() {
    const [countries, setCountries] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");

    $.get("https://restcountries.eu/rest/v2/all", function (data) {
        setCountries(data);
    });

    /**
     * Set the state nameSearch to match NameInput's value
     * @param {String} input    Country name input
     */
    function handleNameSearch(input) {
        setNameSearch(input);
    }

    /**
     * Set the state regionSearch to match RegionSelect's value
     * @param {String} input    Region select value
     */
    function handleRegionSelect(input) {
        setRegionSearch(input);
    }

    /**
     * Check if the country's name matches the name search
     * @param {Object} country  Country JSON object
     */
    function nameMatch(country) {
        const { name } = country;
        return name.toLowerCase().includes(nameSearch.toLowerCase());
    }

    /**
     * Check if the country's region matches the selected region
     * @param {Object} country Country JSON object
     */
    function regionMatch(country) {
        const { region } = country;
        if (regionSearch !== "") {
            return region === regionSearch;
        }
        return true;
    }

    // Filters countries based on name and region
    const filteredCountries = countries.filter(
        (country) => nameMatch(country) && regionMatch(country)
    );

    return (
        <>
            <header>
                <h1>Where in the world?</h1>
                <ThemeSwitch />
            </header>

            <main>
                <section className="search-section">
                    <NameInput onNameInput={handleNameSearch} />
                    <RegionSelect onRegionSelect={handleRegionSelect} />
                </section>

                <section className="country-section">
                    <ul className="country-list">
                        {filteredCountries.map((country) => (
                            <Country key={country.name} obj={country} />
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
