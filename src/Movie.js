import React from "react";

export default function Movie({ name, price, id }) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    )
}