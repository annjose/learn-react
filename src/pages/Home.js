import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Annonymous Playground - Home</h1>
            <div>Hello there! Welcome to my React playground. </div>
            <p> These are the apps I am building to learn React. These apps are very basic stuff, but they help me put into practice what I am learning.</p>

            <ol>
                <li>
                    <span><strong>Tic Tac Toe</strong> - a game of X's and O's</span>
                    <ul>
                        <li><Link to="/game">Play game</Link> (React SPA link)</li>
                        <li><a href="/game">Play game</a> (HTML href link)</li>
                    </ul>
                </li>
                <p/>
                <li>
                    <span><strong>Movie Mosaic</strong> - a simple movie browser -  </span>
                    <a href="/movie-mosaic">Open Movie Mosaic</a>
                </li>
                <li>
                    <span><strong>Asciinema demo</strong> - a terminal session recorded using Asciinema - </span>
                    <a href="/asciinema-demo">Asciinema demo</a>
                </li>
                <li>
                    <span><strong>Helix Tutor</strong> - an easy way to learn how to use Helix - </span>
                    <a href="/helix-tutor">Helix Tutor</a>
                </li>
            </ol>
        </>
    );
}