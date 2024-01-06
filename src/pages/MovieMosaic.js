import React, { useState, useEffect } from "react";

export default function MovieMosaic() {

    const [movies, setMovies] = useState([]);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const baseUrl = 'https://api.themoviedb.org/3';
    const apiToken = 'YOUR_API_TOKEN';
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
                // console.log(json);
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
                <strong>{movie['title']}</strong> ({movie['release_date']}) | Rating: <strong>{ Math.round(movie['vote_average']) } /10</strong >
                <ul><li key={movie['id'] + ':1'}>Overview: {movieOverview}</li></ul>
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


    let navbar = [];

    
    if (totalPages > 1) {
        if (currentPageNumber - 1 > 0) {
            navbar.push(<span className="nav-prev"><button onClick={(e) => { navigateNextPrev(e, 'prev') }}> &lt; &lt; Prev Page (#{currentPageNumber - 1})</button></span>);
        } else {
            navbar.push(<span className="nav-prev"><button disabled="disabled">&lt; &lt; Prev Page</button></span>);
        }
        
        navbar.push(<span className="separator">|</span>);
        navbar.push(<span>You are on <strong>page #{currentPageNumber}</strong> of {totalPages}</span>);
        navbar.push(<span className="separator">|</span>);
        
        if (currentPageNumber < totalPages) {
            navbar.push(<span className="nav-next"><button onClick={(e) => { navigateNextPrev(e, 'next') }}> &gt; &gt; Next Page (#{currentPageNumber + 1}) </button></span>);
        } else {
            navbar.push(<span className="nav-next"><button disabled="disabled">&lt; &lt; Next Page</button></span>);
        }
    }

    return (
        <>
            <h1>Movie Mosaic</h1>
            <a href="/">Home</a>

            <p />

            <h2>Top Rated Movies</h2>
            {navbar}

            <div>
                <ul>{movieList}</ul>
            </div>
        </>
    );
}