import { useState, useContext } from 'react';
import useSound from 'use-sound';

import GameContext from '../../store/game-context';
import bet from '../../assets/audio/bet.mp3';
import cashout from '../../assets/audio/cashout.wav';
import styles from './BetForm.module.css';

function BetForm() {
    const ctx = useContext(GameContext);
    
    const [error, setError] = useState(false);
    const betChangehandler = (event) => {
        const bet = event.target.value;
        if (bet > ctx.money) { setError(true); }
        else { setError(false); }
    }

    const [playBet] = useSound(bet);
    const [playCashout] = useSound(cashout);

    const submitHandler = (event) => {
        event.preventDefault();
        if (!ctx.isRunning) { // Start Game
            if (error) { return; }
            const data = {
                bet: +event.target.bet.value,
                bombs: +event.target.mines.value,
            }
            playBet();
            ctx.startGame(data);
        } else { // Cashout
            playCashout();
            ctx.endGame(true);
        }
    }

    const options = []
    for (let i=1; i<25; i++) {
        options.push(<option key={i} value={i}>{i}</option>); 
    }

    return (
        <form className={styles.betForm} onSubmit={submitHandler}>
            <div className={styles.input}>
                <label htmlFor="bet">Bet Amount</label>
                <input 
                    name="bet" 
                    type="number" 
                    placeholder="0.00" 
                    className={`${styles.inputBox} 
                                ${styles.bet} ${error ? styles.error : undefined}`}
                    step="0.01"
                    min="0"
                    max="10000000"
                    disabled={ctx.isRunning ? "disabled" : undefined}
                    onChange={betChangehandler}
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="mines">Mines</label>
                <select 
                    name="mines" 
                    defaultValue='3' 
                    className={`${styles.inputBox} ${styles.mines}`}
                    disabled={ctx.isRunning ? "disabled" : undefined}
                >
                    {options}
                </select>
            </div>
            <button type="submit" className={styles.startButton}>
                {ctx.isRunning ? 'Cashout' : 'Bet'}
            </button>
        </form>
    );
}

export default BetForm;