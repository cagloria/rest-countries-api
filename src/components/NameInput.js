import React, { useState } from "react";
import "../css/NameInput.css";

function NameInput({ defaultVal, onNameInput }) {
    const [input, setInput] = useState(defaultVal);

    function handleChange(event) {
        setInput(event.target.value);
        onNameInput(event.target.value);
    }

    return (
        <div className="name-input-container form-element">
            <ion-icon name="search-outline"></ion-icon>
            <input
                type="text"
                aria-label="Search for a country"
                placeholder="Search for a country..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
}

export default NameInput;
