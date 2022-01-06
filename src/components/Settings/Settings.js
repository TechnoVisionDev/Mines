import BetForm from './BetForm';
import styles from './Settings.module.css';

function Settings(props) {

    const startGame = (data) => {
        props.onStart(data);
    }

    return (
        <div className={styles.settings}>
            <h1 className={styles.title}>Mines</h1>
            <BetForm onStart={startGame} />
        </div>
    );
}

export default Settings;