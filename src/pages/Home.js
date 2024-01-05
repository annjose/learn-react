import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>My Playground Home</h1>
            <div>Hello there! Welcome to my React playground. </div>
            <p> These are the apps I am learning and building now.</p>

            <ol>
                <li>
                    <span> A game of Tic Tac Toe</span>
                    <ul>
                        <li><Link to="/game">Play game</Link> (React SPA link)</li>
                        <li><a href="/game">Play game</a> (HTML href link)</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}