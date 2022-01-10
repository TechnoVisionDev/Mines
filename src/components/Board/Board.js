import { Fragment, useContext, useEffect } from 'react';

import Tile from './Tile';
import CashoutModal from './CashoutModal';
import DummyBoard from './DummyBoard';
import GameContext from '../../store/game-context';
import styles from './Board.module.css';
import { useState } from 'react/cjs/react.development';

function Board() {
    const ctx = useContext(GameContext);
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        if (ctx.generateBoard) {
            setTiles(generateNewBoard(ctx.gameData));
            ctx.preventBoardGen();
        }
    }, [ctx])

    if (tiles.length === 0) {
        return (<DummyBoard />);
    }

    return (
        <Fragment>
            <div className={styles.board}>
                <div>{tiles[0]}</div>
                <div>{tiles[1]}</div>
                <div>{tiles[2]}</div>
                <div>{tiles[3]}</div>
                <div>{tiles[4]}</div>
                {ctx.cashout ? <CashoutModal /> : undefined}
            </div>
        </Fragment>
    );
}

function generateNewBoard(gameData) {
    let tiles = [];
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
    return tiles;
}

export default Board;