import Tile from './Tile';
import DummyBoard from './DummyBoard';
import styles from './Board.module.css';

function Board(props) {

    if (!props.isStarted) {
        return (
            <DummyBoard />
        );
    }

    const board = Array.from(Array(5), _ => Array(5).fill(false));
    let bombs = 0;
    while (bombs < props.gameData.bombs){
        const x = Math.floor(Math.random() * 4);
        const y = Math.floor(Math.random() * 4);
        if(board[x][y] === false){
            board[x][y] = true;
            bombs++;
        }
    }

    const tiles = [];
    for (let i=0; i<5; i++) {
        tiles[i] = [];
        for (let j=0; j<5; j++) {
            tiles[i].push(<Tile key={j} bomb={board[i][j]} />);
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