import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./Themes";
import $ from "jquery";
import ThemeSwitch from "./ThemeSwitch";
import NameInput from "./NameInput";
import RegionSelect from "./RegionSelect";
import Country from "./Country";
import CountryDetails from "./CountryDetails";
import "../css/App.css";

function App() {
    const [countries, setCountries] = useState([]);
    const [nameSearch, setNameSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState(<p>Requesting data...</p>);

    useEffect(() => {
        if (countries.length === 0) {
            $.get("https://restcountries.eu/rest/v2/all", function (data) {
                setCountries(data);
            })
                .done(function () {
                    setMessage(undefined);
                })
                .fail(function (xhr, status, error) {
                    setError(
                        `Could not retrieve country data. ` +
                            `Error ${xhr.status}. ${xhr.responseText}`
                    );
                });
        }
    }, [countries]);

    function toggleTheme(onDarkMode) {
        setDarkMode(onDarkMode);
    }

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

    const homeCountryContent =
        error.length > 0 ? (
            <p>{error}</p>
        ) : (
            <ul className="country-list">
                {filteredCountries.map((country) => (
                    <Country key={country.name} obj={country} />
                ))}
            </ul>
        );

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <header className="element">
                <h1>Where in the world?</h1>
                <ThemeSwitch onThemeSwitch={toggleTheme} />
            </header>

            <main>
                <Router>
                    <Switch>
                        {countries.map((country) => (
                            <Route key={country.name} path={`/${country.name}`}>
                                <CountryDetails obj={country} />
                            </Route>
                        ))}

                        <Route path="/">
                            <section className="countries-section">
                                <div className="filter-form">
                                    <NameInput
                                        onNameInput={handleNameSearch}
                                        defaultVal={nameSearch}
                                    />

                                    <RegionSelect
                                        onRegionSelect={handleRegionSelect}
                                        defaultVal={regionSearch}
                                    />
                                </div>

                                {message}

                                {homeCountryContent}
                            </section>
                        </Route>
                    </Switch>
                </Router>
            </main>
        </ThemeProvider>
    );
}

export default App;
