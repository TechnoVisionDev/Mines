import {useContext} from 'react';
import useSound from 'use-sound';

import GameContext from '../../store/game-context';
import bet from '../../assets/audio/bet.mp3';
import cashout from '../../assets/audio/cashout.wav';
import styles from './BetForm.module.css';

function BetForm() {
    const ctx = useContext(GameContext);
    const [playBet] = useSound(bet);
    const [playCashout] = useSound(cashout);

    const submitHandler = (event) => {
        event.preventDefault();
        if (!ctx.isRunning) { // Start Game
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
                <label htmlFor="balance">Balance</label>
                <input 
                    name="balance" 
                    value={`$${ctx.money.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} 
                    className={`${styles.inputBox} ${styles.bet} ${styles.disabled}`}
                    disable="disabled"
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="bet">Bet Amount</label>
                <input 
                    name="bet" 
                    type="number" 
                    placeholder="0.00" 
                    className={`${styles.inputBox} ${styles.bet}`}
                    step="0.01"
                    min="0"
                    max="10000000"
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="mines">Mines</label>
                <select 
                    name="mines" 
                    defaultValue='3' 
                    className={`${styles.inputBox} ${styles.mines}`}
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