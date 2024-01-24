import * as AsciinemaPlayer from 'asciinema-player';
import { useEffect, useRef, useState } from 'react';

import 'asciinema-player/dist/bundle/asciinema-player.css';

const AsciinemaDemo = () => {

    const playerIsLoaded = useRef(false);

    const [keystrokes, setKeystrokes] = useState([]);

    useEffect(() => {

        if (playerIsLoaded.current) {
            console.log('useEffect called after loading player. Exiting useEffect now.')
            return;
        }
        const castFile = "/ann-demo.cast";
        const demoElement = document.getElementById('demo');
        const options = {
            markers: [
                [15, 'create Readme'],
                [26, 'save Readme'],
                [38, 'git Add'],
                [65, 'git push']
            ]
        };
        const player = AsciinemaPlayer.create(castFile, demoElement, options);

        player.addEventListener('play', () => {
            console.log('play!');
        })

        player.addEventListener('pause', () => {
            console.log("paused!");
        })

        player.addEventListener('playing', () => {
            console.log(`playing!`);
        })

        player.addEventListener('input', ({ data }) => {
            const newInput = JSON.stringify(data);
            console.log('new input!', newInput);

            setKeystrokes((prevState) => {
                console.log(`prevState=${prevState}`);
                return [...prevState, newInput];
            })
        })

        playerIsLoaded.current = true;
    }, []);

    return (
        <>
            <h1>Asciinema Demo</h1>
            <a href="/">Home</a>
            <p />

            <div>Asciinema playing a terminal session recorded on Ann's computer</div>

            <div style={{ width: '928px', height: '670px' }}>
                <div id="demo"></div>
            </div>
        </>
    );
};

export default AsciinemaDemo;