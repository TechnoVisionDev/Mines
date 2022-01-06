import Tile from './Tile';
import DummyBoard from './DummyBoard';
import styles from './Board.module.css';

function Board(props) {
    if (!props.isStarted) {
        return (
            <DummyBoard />
        );
    }

    const tiles = [];
    const board = Array.from(Array(5), _ => Array(5).fill(false));
    let maxBombs = props.gameData.bombs;
    if (props.gameData.bombs > 12) { maxBombs = 25 - maxBombs; }

    let bombs = 0;
    while (bombs < maxBombs){
        const x = Math.floor(Math.random() * 5);
        const y = Math.floor(Math.random() * 5);
        if (board[x][y] === false) {
            console.log(x, y);
            board[x][y] = true;
            bombs++;
        }
    }

    for (let i=0; i<5; i++) {
        tiles[i] = [];
        for (let j=0; j<5; j++) {
            let hasBomb = board[i][j];
            if (props.gameData.bombs > 12) { hasBomb = !hasBomb };
            tiles[i].push(<Tile key={j} bomb={hasBomb} />);
        }
    }

    return (
        <div className={styles.board}>
            <div>{tiles[0]}</div>
            <div>{tiles[1]}</div>
            <div>{tiles[2]}</div>
            <div>{tiles[3]}</div>
            <div>{tiles[4]}</div>
        </div>
    );
}

export default Board;