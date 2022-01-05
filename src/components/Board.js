
import Row from './Row';
import './Board.css';

function Board() {
    return (
        <div className="board">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}

export default Board;