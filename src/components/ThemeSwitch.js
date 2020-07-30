import React, { useState } from "react";
import "../css/ThemeSwitch.css";

function ThemeSwitch({ onThemeSwitch }) {
    const [darkMode, setDarkMode] = useState(false);

    function handleThemeSwitch(event) {
        setDarkMode(event.target.checked);
        onThemeSwitch(event.target.checked);
    }

    return (
        <div className="theme-switch">
            <input
                type="checkbox"
                name="theme"
                id="theme-checkbox"
                className="theme-switch__checkbox"
                checked={darkMode}
                onChange={handleThemeSwitch}
            />
            <label htmlFor="theme-checkbox" className="theme-switch__label">
                Dark Mode
            </label>
        </div>
    );
}

export default ThemeSwitch;
