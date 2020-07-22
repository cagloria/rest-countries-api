import React from "react";

function ThemeSwitch() {
    return (
        <>
            <input type="checkbox" name="theme" id="theme-switch" />
            <label htmlFor="theme-switch">Dark mode</label>
        </>
    );
}

export default ThemeSwitch;
