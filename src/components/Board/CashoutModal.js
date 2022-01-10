import { useContext } from 'react';
import GameContext from '../../store/game-context';
import {calcMultiplier, calcEarnings, addCommas} from '../../util/multiplier';
import styles from './CashoutModal.module.css';

function CashoutModal() {
    const ctx = useContext(GameContext);
    const {bet, bombs} = ctx.gameData;
    const multiplier = calcMultiplier(ctx.gems, bombs).toFixed(2);
    const reward = calcEarnings(bet, ctx.gems, bombs).toFixed(2);

    return (
        <div className={styles.cashoutModal}>
            <h1 className={styles.multiplier}>{multiplier}x</h1>
            <div className={styles.divider}></div>
            <p className={styles.reward}>${addCommas(reward)}</p>
        </div>
    );
}

export default CashoutModal;