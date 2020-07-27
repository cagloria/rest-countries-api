import React, { useState } from "react";
import "../css/NameInput.css";

function NameInput({ defaultVal, onNameInput }) {
    const [input, setInput] = useState(defaultVal);

    function handleChange(event) {
        setInput(event.target.value);
        onNameInput(event.target.value);
    }

    return (
        <input
            type="text"
            aria-label="Search for a country"
            placeholder="Search for a country..."
            value={input}
            className="name-input"
            onChange={handleChange}
        />
    );
}

export default NameInput;
