import {calcMultiplier, calcEarnings} from '../../util/multiplier';
import styles from './CashoutModal.module.css';

function CashoutModal(props) {
    const {bet, bombs} = props.gameData;
    const multiplier = Math.round((calcMultiplier(props.gems, bombs) + Number.EPSILON) * 100) / 100;
    const reward = calcEarnings(bet, props.gems, bombs);
    console.log(reward);

    return (
        <div className={styles.cashoutModal}>
            <h1 className={styles.multiplier}>{multiplier}x</h1>
            <div className={styles.divider}></div>
            <p className={styles.reward}>${reward}</p>
        </div>
    );
}

export default CashoutModal;