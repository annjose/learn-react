import * as AsciinemaPlayer from 'asciinema-player';
import { useEffect, useRef, useState } from 'react';

import 'asciinema-player/dist/bundle/asciinema-player.css';

const HelixTutor = () => {

    const challenges = [
        { number: 1, title: 'Change all occurences of "helix" to uppercase, except for URLs', castFile: '/ch-01-solution.cast', markerCount: 6 }
    ];

    const player = useRef(null);

    const [keystrokes, setKeystrokes] = useState([]);

    const currentChallenge = challenges[0];

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMarkerIndex, setCurrentMarkerIndex] = useState(-1);

    useEffect(() => {

        if (player.current) {
            console.log('useEffect called after loading player. Exiting useEffect now.')
            return;
        }
        const chPlayerElement = document.getElementById('ch-player');
        const options = {};

        player.current = AsciinemaPlayer.create(currentChallenge.castFile, chPlayerElement, options);

        player.current.addEventListener('play', () => {
            console.log('play!');
            setIsPlaying(true);
        })

        player.current.addEventListener('pause', () => {
            console.log("paused!");
            setIsPlaying(false);
        })

        player.current.addEventListener('playing', () => {
            console.log(`playing!`);
        })

        player.current.addEventListener('ended', () => {
            console.log("ended!");
            setIsPlaying(false);
        })

        player.current.addEventListener('marker', marker => {
            console.log(`reached marker. index: ${marker.index}, label: ${marker.label}`);
            setCurrentMarkerIndex(marker.index);
        })

        player.current.addEventListener('input', ({ data }) => {
            const newInput = JSON.stringify(data);
            setKeystrokes((prevState) => {
                return [...prevState, newInput];
            })
        })
    }, []);

    const PlayerNav = () => {

        const handlePlayPauseButtonClick = () => {
            if (isPlaying == true) {
                player.current.pause();
                setIsPlaying(false);
            } else {
                player.current.play();
                setIsPlaying(true);
            }
        }

        const handleMarkerButtonClick = (direction) => {
            const markerIndex = direction == 'next' ? currentMarkerIndex + 1 : currentMarkerIndex - 1;
            console.log(`seeing to marker index ${markerIndex}, current marker index: ${currentMarkerIndex}`);

            player.current.seek({ marker: markerIndex });
            setCurrentMarkerIndex(markerIndex);
        }

        const handleResetButton = () => {
            setKeystrokes([]);
        }

        return (
            <>
                <div style={{ marginBottom: '24px' }}>
                    <button style={{ marginRight: '40px' }} onClick={handlePlayPauseButtonClick}>
                        {isPlaying == true ? 'Pause' : 'Play'}
                    </button>

                    <button
                        style={{ marginRight: '8px' }}
                        disabled={currentMarkerIndex <= 0 ? true : false}
                        onClick={() => { handleMarkerButtonClick('prev') }}>Prev Marker</button>
                    <button style={{ marginRight: '48px' }}
                        disabled={currentMarkerIndex >= currentChallenge.markerCount - 1 ? true : false}
                        onClick={() => { handleMarkerButtonClick('next') }}>Next Marker</button>

                    <button onClick={handleResetButton}>Reset Data</button>
                </div>
            </>
        )
    };

    const KeystrokesPanel = () => {
        return (
            <>
                <h3>Keystrokes</h3>
                <ul>
                    {keystrokes.map((keystroke, index) => (
                        <li key={index}>
                            <span style={{ marginRight: '8px' }}>{keystroke.replace(/\"/g, "")}</span>
                        </li>
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
                <p />
            </>
        );
    };

    const Commands = () => {
        let commands = [];
        let tempCommand = '';

        keystrokes.map((keystroke) => {
            keystroke = keystroke.replace(/\"/g, "");
            if (keystroke == '\\r') {
                // console.log(`found command: ${tempCommand}`);
                commands.push(tempCommand);
                tempCommand = '';
            } else {
                tempCommand += keystroke;
            }
        });

        return (
            <>
                <h3>Commands</h3>
                <ul>
                    {commands.map((command, index) => (
                        <li key={index}><pre>{command}</pre></li>
                    ))}
                </ul>
            </>
        )
    };

    return (
        <>
            <h1>Helix Tutor</h1>
            <a href="/">Home</a>
            <p />

            <Challenge challenge={currentChallenge} />

            <div id='ch-player' style={{ width: '928px', height: '670px' }}></div>

            <PlayerNav />
            <KeystrokesPanel />
            <Commands />
        </>
    );
};

export default HelixTutor;