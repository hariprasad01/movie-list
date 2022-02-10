import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

export default function MovieList() {
    const [movies, setMovie] = useContext(MovieContext)

    return (
        <>
            {movies.map((movie, index) => <Movie key={index} {...movie}></Movie>)}
        </>
    );
}