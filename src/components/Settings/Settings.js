import BetForm from './BetForm';
import styles from './Settings.module.css';

function Settings(props) {
    const startHandler = (data) => {
        props.onStart(data);
    }

    return (
        <div className={styles.settings}>
            <h1 className={styles.title}>Mines</h1>
            <BetForm onStart={startHandler} />
        </div>
    );
}

export default Settings;