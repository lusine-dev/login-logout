import React, { useState } from 'react';

function Input() {
    const [value, setValue] = useState("");

    return (
        <>
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </>
    )
}

export default Input;
