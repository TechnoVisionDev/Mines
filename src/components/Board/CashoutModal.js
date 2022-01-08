import {calcMultiplier, calcEarnings, addCommas} from '../../util/multiplier';
import styles from './CashoutModal.module.css';

function CashoutModal(props) {
    const {bet, bombs} = props.gameData;
    const multiplier = calcMultiplier(props.gems, bombs).toFixed(2);
    const reward = calcEarnings(bet, props.gems, bombs).toFixed(2);

    return (
        <div className={styles.cashoutModal}>
            <h1 className={styles.multiplier}>{multiplier}x</h1>
            <div className={styles.divider}></div>
            <p className={styles.reward}>${addCommas(reward)}</p>
        </div>
    );
}

export default CashoutModal;