import {useState} from 'react';
import useSound from 'use-sound';

import explosion from '../../assets/audio/bomb.wav';
import success from '../../assets/audio/gem.wav';
import styles from './Tile.module.css'

function Tile() {
    const [playExposion] = useSound(explosion);
    const [playSuccess] = useSound(success);

    const [type, setType] = useState('gem');
    const [isClicked, setClicked] = useState(false);

    const clickHandler = () => {
        if (!isClicked) {
            const num = Math.floor(Math.random() * 10 + 1)
            if (num === 1) {
                setType('bomb');
                playExposion();
            } else {
                playSuccess();
            }
            setClicked(true);
        }
    }

    return (
        <button 
            onClick={clickHandler} 
            className={`${styles.button} ${isClicked ? `${styles[type]} ${styles.clicked}` : undefined}`}
        >
        </button>
    );
}

export default Tile;