import {useState} from 'react';
import useSound from 'use-sound';

import explosion from '../assets/bomb.wav';
import success from '../assets/gem.wav';
import './Tile.css'

function Tile() {
    const [playExposion] = useSound(explosion);
    const [playSuccess] = useSound(success);
    const [background, setBackground] = useState('gem');
    const [isClicked, setClicked] = useState(false);
    const clickHandler = () => {
        if (!isClicked) {
            const num = Math.floor(Math.random() * 10 + 1)
            if (num === 1) {
                setBackground('bomb');
                playExposion();
            } else {
                playSuccess();
            }
            setClicked(true);
        }
    }

    return (
        <button onClick={clickHandler} className={isClicked ? `${background} clicked` : undefined}></button>
    );
}

export default Tile;