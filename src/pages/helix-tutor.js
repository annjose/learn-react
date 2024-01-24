import * as AsciinemaPlayer from 'asciinema-player';
import { useEffect, useRef, useState } from 'react';

import 'asciinema-player/dist/bundle/asciinema-player.css';

const HelixTutor = () => {

    const challenges = [
        { number: 1, title: 'Change all occurences of "helix" to uppercase, except for URLs', castFile: '/ch-01-solution.cast' }
    ];

    const playerIsLoaded = useRef(false);

    const [keystrokes, setKeystrokes] = useState([]);

    const currentChallenge = challenges[0];

    useEffect(() => {

        if (playerIsLoaded.current) {
            console.log('useEffect called after loading player. Exiting useEffect now.')
            return;
        }
        const chPlayerElement = document.getElementById('ch-player');
        const options = {
            // pauseOnMarkers: true,
            markers: [
                [13, 'launch Helix'],
                [16, 'select all file'],
                [20, 'search for Helix'],
                [25, 'convert to uppercase'],
                [28, 'save file'],
                [31, 'diff output'],
            ]
        };
        const player = AsciinemaPlayer.create(currentChallenge.castFile, chPlayerElement, options);

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
            // console.log('new input!', newInput);

            setKeystrokes((prevState) => {
                console.log(`prevState=${prevState}`);
                return [...prevState, newInput];
            })
        })

        playerIsLoaded.current = true;
    }, []);

    const KeystrokesPanel = () => {
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


    const Challenge = ({ challenge }) => {
        return (
hello
        );
        ;
    }

    return (
        <>
            <h1>Helix Tutor</h1>
            <a href="/">Home</a>
            <p />

            <h3>Challenge #{currentChallenge.number}</h3>
            <div>{currentChallenge.title}</div>

            <div id='ch-player' style={{ width: '928px', height: '670px' }}></div>

            <KeystrokesPanel />
        </>
    );
};

export default HelixTutor;