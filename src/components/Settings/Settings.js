import { useContext } from 'react';

import { addCommas } from '../../util/multiplier';
import GameContext from '../../store/game-context';
import BetForm from './BetForm';
import styles from './Settings.module.css';

function Settings() {
    const ctx = useContext(GameContext);
    let balance = `$${addCommas(ctx.money.toFixed(2).toString())}`;

    return (
        <div className={styles.settings}>
            <h1 className={styles.title}>Mines</h1>
            <p className={styles.label}>Balance</p>
            <p className={styles.balance}>{balance}</p>
            <BetForm/>
        </div>
    );
}

export default Settings;