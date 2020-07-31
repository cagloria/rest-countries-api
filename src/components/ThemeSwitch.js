import React, { useState } from "react";
import "../css/ThemeSwitch.css";

function ThemeSwitch({ onThemeSwitch }) {
    const [darkMode, setDarkMode] = useState(false);

    function handleThemeSwitch() {
        setDarkMode(!darkMode);
        onThemeSwitch(!darkMode);
    }

    return (
        <button className="theme-switch" onClick={handleThemeSwitch}>
            <ion-icon
                name={darkMode ? "moon" : "sunny"}
                aria-hidden="true"
            ></ion-icon>
            {darkMode ? "Light" : "Dark"} Mode
        </button>
    );
}

export default ThemeSwitch;
