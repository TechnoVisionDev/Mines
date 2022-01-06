import tileStyles from './Tile.module.css';
import boardStiles from './Board.module.css';

function DummyBoard() {
    const tiles = [];
    for (let i=0; i<5; i++) {
        tiles[i] = [];
        for (let j=0; j<5; j++) {
            tiles[i].push(<button key={j} className={tileStyles.button}></button>);
        }
    }

    return (
        <div className={boardStiles.board}>
            <div>{tiles[0]}</div>
            <div>{tiles[1]}</div>
            <div>{tiles[2]}</div>
            <div>{tiles[3]}</div>
            <div>{tiles[4]}</div>
        </div>
    );
}

export default DummyBoard;