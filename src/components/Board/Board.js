
import Row from './Row';
import styles from './Board.module.css';

function Board() {
    return (
        <div className={styles.board}>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}

export default Board;