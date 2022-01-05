
import styles from './Settings.module.css';

function Settings() {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const options = []
    for (let i=1; i<25; i++) {
        if (i === 3) { options.push(<option value={i} selected>{i}</option>); } 
        else { options.push(<option value={i}>{i}</option>); }
    }

    return (
        <div className={styles.settings}>
            <h1 className={styles.title}>Mines</h1>
            <form className={styles.inputs} onSubmit={submitHandler}>
                <div className={styles.input}>
                    <label for="bet">Bet Amount</label>
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
                    <label for="mines">Mines</label>
                    <select name="mines" className={`${styles.inputBox} ${styles.mines}`}>
                        {options}
                    </select>
                </div>
                <button type="submit" className={styles.startButton}>Bet</button>
            </form>
        </div>
    );
}

export default Settings;