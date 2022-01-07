import {useState, useContext} from 'react';
import useSound from 'use-sound';

import GameContext from '../../store/game-context';
import explosion from '../../assets/audio/bomb.wav';
import success from '../../assets/audio/gem.wav';
import styles from './Tile.module.css'

function Tile(props) {
    const ctx = useContext(GameContext);

    const [playExposion] = useSound(explosion);
    const [playSuccess] = useSound(success);

    const [type, setType] = useState('gem');
    const [isClicked, setClicked] = useState(false);
    const [isRevealed, setRevealed] = useState(false);

    const clickHandler = () => {
        if (!isClicked) {
            if (props.bomb) {
                setType('bomb');
                playExposion();
                props.endGame();
            } else {
                props.addGem();
                playSuccess();
            }
            setClicked(true);
        }
    }

    const revealTiles = (!ctx.isRunning && !ctx.firstGame && !isClicked);
    if (revealTiles) {
        if (props.bomb) {
            setType('bomb');
        }
        setClicked(true);
        setRevealed(true);
    }

    return (
        <button 
            onClick={clickHandler} 
            className={`${styles.button} ${isClicked ? `${styles[type]} ${styles.clicked}` : undefined}
                        ${isRevealed ? `${styles[type+'-revealed']}` : undefined }`}
        >
        </button>
    );
}

export default Tile;