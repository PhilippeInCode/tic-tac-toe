import Square from './Square';
import '../components/Board.css';

const Board = ({ squares, onSquareClick }) => {
    return (
        <div className="board">
            {squares.map((value, index) => (
                <Square key={index} value={value} onClick={() => onSquareClick(index)} />
            ))}
        </div>
    );
};

export default Board;