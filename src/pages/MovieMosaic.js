import React, { useState, useEffect } from "react";

export default function MovieMosaic() {

    const [movies, setMovies] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const baseUrl = 'https://api.themoviedb.org/3';
    const apiToken = process.env.REACT_APP_TOKEN;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiToken}`
        }
    };

    const fetchMovies = (pageNumber) => {

        const apiEndpoint = '/movie/top_rated?language=en-US&page=';
        const url = `${baseUrl}${apiEndpoint}${pageNumber}`;

        console.log(`url: ${url}`);

        return fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setCurrentPageNumber(json['page']);
                setTotalPages(json['total_pages']);
                const movies = json['results'];
                setMovies(movies);
            })
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        fetchMovies(1);
    }, []);

    const movieList = movies.map((movie) => {

        let movieOverview = <span>{movie['overview'].substring(0, 200) + '...'}</span>;

        return (
            <li key={movie['id']}>
                <strong>{movie['title']}</strong> ({movie['release_date']}) | Rating: <strong>{Math.round(movie['vote_average'])} /10</strong >
                <ul>
                    <li key={movie['id'] + ':1'}>
                        Overview: {movieOverview}
                    </li>
                </ul>
                <p />
            </li>
        );
    });

    const navigateNextPrev = (e, direction) => {
        e.preventDefault();

        console.log(`navigateNextPrev(): ${direction}. currentPageNumber: ${currentPageNumber}`);

        const pageNumber = direction === 'next' ? currentPageNumber + 1 : currentPageNumber - 1;
        fetchMovies(pageNumber);
    }

    /* Construct the Next and Prev buttons - use three JSX techniques for demo purpose
        1. using conditional if-else and embed markup in between
        2. sequence of markups or JSX variables
        3. using ternary operation ? :
        Note the empty wrappers <> </> - these are important to tell React that it is the beginning of JSX and there is only one root
    */

    let PrevButton;
    if (currentPageNumber - 1 > 0) {
        PrevButton = <span className="nav-prev"><button onClick={(e) => { navigateNextPrev(e, 'prev') }}> &lt; &lt; Prev Page (#{currentPageNumber - 1})</button></span>
    } else {
        PrevButton = <span className="nav-prev"><button disabled="disabled">&lt; &lt; Prev Page</button></span>
    }

    let nextPrevPanel =
        <>
            {PrevButton}

            <span className="separator">|</span>
            <span>You are on <strong>page #{currentPageNumber}</strong> of {totalPages}</span>
            <span className="separator">|</span>

            {currentPageNumber < totalPages ? (
                <span className="nav-next"><button onClick={(e) => { navigateNextPrev(e, 'next') }}> &gt; &gt; Next Page (#{currentPageNumber + 1}) </button></span>
            ) : (
                <span className="nav-next"><button disabled="disabled">&lt; &lt; Next Page</button></span>
            )}
        </>

    return (
        <>
            <h1>Movie Mosaic</h1>
            <a href="/">Home</a>

            <p />

            <h2>Top Rated Movies</h2>
            {nextPrevPanel}

            <ul>{movieList}</ul>
        </>
    );
}