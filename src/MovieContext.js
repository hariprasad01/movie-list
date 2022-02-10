import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23452
        },
        {
            name: "Batman",
            price: "$10",
            id: 23452
        },
        {
            name: "Avengers",
            price: "$10",
            id: 23452
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}