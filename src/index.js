import React, { useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ThemeSwitch from "./components/ThemeSwitch";
import CountryInput from "./components/CountryInput";
import RegionSelect from "./components/RegionSelect";
import Country from "./components/Country";

function App() {
    const [countries, setCountries] = useState([]);

    $.get("https://restcountries.eu/rest/v2/all", function (data) {
        setCountries(data);
    });

    return (
        <>
            <header>
                <h1>Where in the world?</h1>
                <ThemeSwitch />
            </header>

            <main>
                <section className="search-section">
                    <CountryInput />
                    <RegionSelect />
                </section>

                <section className="country-section">
                    <ul>
                        {countries.map((country) => (
                            <Country key={country.name} obj={country} />
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
