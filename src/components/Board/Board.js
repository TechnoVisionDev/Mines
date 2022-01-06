import { useContext } from 'react';

import Tile from './Tile';
import DummyBoard from './DummyBoard';
import GameContext from '../../store/game-context';
import styles from './Board.module.css';

let tiles = [];

function Board(props) {
    const ctx = useContext(GameContext);
    if (ctx.firstGame) {
        return (<DummyBoard />);
    }

    if (ctx.isRunning) {
        generateNewBoard(props.gameData);
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

function generateNewBoard(gameData) {
    const board = Array.from(Array(5), _ => Array(5).fill(false));
    let maxBombs = gameData.bombs;
    if (maxBombs > 12) { maxBombs = 25 - maxBombs; }

    let bombs = 0;
    while (bombs < maxBombs){
        const x = Math.floor(Math.random() * 5);
        const y = Math.floor(Math.random() * 5);
        if (board[x][y] === false) {
            board[x][y] = true;
            bombs++;
        }
    }

    for (let i=0; i<5; i++) {
        tiles[i] = [];
        for (let j=0; j<5; j++) {
            let hasBomb = board[i][j];
            if (gameData.bombs > 12) { hasBomb = !hasBomb };
            tiles[i].push(<Tile key={Date.now() + '-' + j} bomb={hasBomb} />);
        }
    }
}

export default Board;