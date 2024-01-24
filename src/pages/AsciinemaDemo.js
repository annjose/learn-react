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
        const castFile = "/ann-stdin.cast";
        const demoElement = document.getElementById('my-player');
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

    const Keystrokes = () => {
        console.log(`keystrokes=${keystrokes}`);

        return (
            <>
                <h2>Keystrokes</h2>
                <ul>
                    {keystrokes.map((keystroke) => (
                        <li>{keystroke}</li>
                    ))}
                </ul>
            </>
        )
    };

    return (
        <>
            <h1>Asciinema Demo</h1>
            <a href="/">Home</a>
            <p />

            <div>A terminal session on my computer recorded using <a href='https://asciinema.org' target='new'>Asciinema</a> and now playing with Asciinema player</div>
            <p />

            <div id='my-player' style={{ width: '928px', height: '670px' }}></div>

            <Keystrokes />
        </>
    );
};

export default AsciinemaDemo;