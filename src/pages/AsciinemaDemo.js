import * as AsciinemaPlayer from 'asciinema-player';
import { useEffect, useRef } from 'react';

import 'asciinema-player/dist/bundle/asciinema-player.css';

const AsciinemaDemo = () => {

    const playerIsLoaded = useRef(false);

    useEffect(() => {

        if (playerIsLoaded.current) {
            console.log('useEffect called after loading player. Exiting useEffect now.')
            return;
        }
        const castFile = "/ann-demo.cast";
        const demoElement = document.getElementById('demo');
        const options = {
            theme: 'dracula', 
            markers: [
                [15, 'create Readme'],
                [26, 'save Readme'],
                [38, 'git Add'],
                [65, 'git push']
            ]
        };
        AsciinemaPlayer.create(castFile, demoElement, options);

        playerIsLoaded.current = true;
    }, []);

    return (
        <>
            <h1>Asciinema Demo</h1>
            <a href="/">Home</a>
            <p />

            <div>Asciinema playing a terminal session recorded on Ann's computer</div>
            <div style={{ width: '1000px' }}>
                <div id="demo"></div>
            </div>
        </>
    );
};

export default AsciinemaDemo;