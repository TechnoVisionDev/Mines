import {useState} from 'react';
import useSound from 'use-sound';

import explosion from '../../assets/audio/bomb.wav';
import success from '../../assets/audio/gem.wav';
import styles from './Tile.module.css'

function Tile(props) {
    const [playExposion] = useSound(explosion);
    const [playSuccess] = useSound(success);

    const [type, setType] = useState('gem');
    const [isClicked, setClicked] = useState(false);

    const clickHandler = () => {
        if (!isClicked) {
            if (props.bomb) {
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