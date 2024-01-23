import * as AsciinemaPlayer from 'asciinema-player';
import { useEffect, useRef } from 'react';

import 'asciinema-player/dist/bundle/asciinema-player.css';

const AsciinemaDemo = () => {

    const playerIsLoaded = useRef(false);

    useEffect(() => {

        if(playerIsLoaded.current) {
            console.log('useEffect called after loading player. Exiting useEffect now.')
            return;
        }
        const castFile = "/ann-demo.cast";
        const demoElement = document.getElementById('demo');

        AsciinemaPlayer.create(castFile, demoElement);

        playerIsLoaded.current = true;
    }, []);

    return (
        <>
            <h1>Asciinema Demo</h1>
            <a href="/">Home</a>
            <p />

            <div>Asciinema playing a terminal session recorded on Ann's computer</div>
            <div style={{ width: '800px' }}>
                <div id="demo"></div>
            </div>
        </>
    );
};

export default AsciinemaDemo;