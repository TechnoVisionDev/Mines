import styles from './BetForm.module.css';

function BetForm() {
    const submitHandler = (event) => {
        event.preventDefault();
    }

    const options = []
    for (let i=1; i<25; i++) {
        if (i === 3) { options.push(<option key={i} value={i} defaultValue>{i}</option>); } 
        else { options.push(<option key={i} value={i}>{i}</option>); }
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
                    required
                    title="Please enter Alphabets."
                />
            </div>
            <div className={styles.input}>
                <label htmlFor="mines">Mines</label>
                <select name="mines" className={`${styles.inputBox} ${styles.mines}`}>
                    {options}
                </select>
            </div>
            <button type="submit" className={styles.startButton}>Bet</button>
        </form>
    );
}

export default BetForm;