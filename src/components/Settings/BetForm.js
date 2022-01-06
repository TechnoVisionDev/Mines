import {useState} from 'react';

import styles from './BetForm.module.css';

function BetForm(props) {
    const [enteredBet, setEnteredBet] = useState(0.00);
    const [enteredBombs, setEnteredBombs] = useState(3);
    const [buttonText, setButtonText] = useState('Bet');
    const betChangehandler = (event) => setEnteredBet(event.target.value);
    const bombsChangehandler = (event) => setEnteredBombs(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            bet: +enteredBet,
            bombs: +enteredBombs,
        }
        props.onStart(data);
        setButtonText('Cashout');
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
                    className={`${styles.inputBox} ${styles.bet}`}
                    step='0.01'
                    min='0'
                    max='10000000'
                    title="Please enter Alphabets."
                    onChange={betChangehandler}
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="mines">Mines</label>
                <select 
                    name="mines" 
                    defaultValue='3' 
                    className={`${styles.inputBox} ${styles.mines}`}
                    onChange={bombsChangehandler}
                >
                    {options}
                </select>
            </div>
            <button type="submit" className={styles.startButton}>{buttonText}</button>
        </form>
    );
}

export default BetForm;