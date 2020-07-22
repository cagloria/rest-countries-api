import React from "react";
import ReactDOM from "react-dom";
import ThemeSwitch from "./components/ThemeSwitch";
import CountryInput from "./components/CountryInput";
import RegionSelect from "./components/RegionSelect";
import Country from "./components/Country";

function App() {
    const countries = [{ name: "CountryA" }, { name: "CountryB" }];

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
                            <Country key={country.name} name={country.name} />
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
