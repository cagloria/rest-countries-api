import React from "react";

function NameInput({ onNameInput }) {
    function handleChange(event) {
        onNameInput(event.target.value);
    }

    return (
        <input
            type="text"
            aria-label="Search for a country"
            placeholder="Search for a country..."
            onChange={handleChange}
        />
    );
}

export default NameInput;
