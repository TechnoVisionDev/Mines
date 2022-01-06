import BetForm from './BetForm';
import styles from './Settings.module.css';

function Settings(props) {
    return (
        <div className={styles.settings}>
            <h1 className={styles.title}>Mines</h1>
            <BetForm />
        </div>
    );
}

export default Settings;