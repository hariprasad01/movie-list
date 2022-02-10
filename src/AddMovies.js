import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

export default function AddMovies() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext)

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(previousMovies => [...previousMovies, { name, price }])
    }

    const updateName = e => {
        setName(e.target.value)
    }

    const updatePrice = e => {
        setPrice(e.target.value)
    }

    return (
        <form>
            <input name="name" value={name} onChange={updateName}></input>
            <input name="price" value={price} onChange={updatePrice}></input>
            <button type="submit" onClick={addMovie}>Submit</button>
        </form>
    )
}