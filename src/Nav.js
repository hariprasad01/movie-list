import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
export default function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="nav">
            <h3>This is a navigation bar</h3>
            <h3>No. of movies: {movies.length}</h3>
        </div>
    )

}