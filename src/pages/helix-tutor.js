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
        const options = {};
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
                // console.log(`prevState=${prevState}`);
                return [...prevState, newInput];
            })
        })

        playerIsLoaded.current = true;
    }, []);

    const KeystrokesPanel = () => {
        return (
            <>
                <h3>Keystrokes</h3>
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
            <>
                <h3>Challenge #{challenge.number}</h3>
                <div>{challenge.title}</div>
                <p/>
            </>
        );
    };

    return (
        <>
            <h1>Helix Tutor</h1>
            <a href="/">Home</a>
            <p />

            <Challenge challenge={currentChallenge}/>

            <div id='ch-player' style={{ width: '928px', height: '670px' }}></div>

            <KeystrokesPanel />
        </>
    );
};

export default HelixTutor;