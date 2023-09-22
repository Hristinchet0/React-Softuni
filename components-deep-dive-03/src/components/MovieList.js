import Movie from "./Movie";
import React from "react";

export default function MovieList({ movies, onMovieDelete, onMovieSelect }) {

    // let movieElements = [];

    // for (const movie of movies) {
    //     // movieElements.push(React.createElement(Movie, movie));
    //     movieElements.push(<li><Movie {...movie}/></li>)
    // }

    // let movieList = movies.map(movie => <li><Movie {...movie} /></li>);


    return (
        <ul>
            {movies.map(movie => (
                <li>
                    <Movie key={movie.id} {...movie} onMovieDelete={onMovieDelete} onMovieSelect={onMovieSelect} />
                </li>
            ))}
        </ul>
    );;
}