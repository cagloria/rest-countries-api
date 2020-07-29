import React from "react";
import "../css/ThemeSwitch.css";

function ThemeSwitch() {
    return (
        <div className="theme-switch">
            <input
                type="checkbox"
                name="theme"
                id="theme-checkbox"
                className="theme-switch__checkbox"
            />
            <label htmlFor="theme-checkbox" className="theme-switch__label">
                Dark Mode
            </label>
        </div>
    );
}

export default ThemeSwitch;
