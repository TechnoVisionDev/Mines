import {useState} from 'react';

import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import GameContext from '../store/game-context';
import styles from './App.module.css';

function App() {

  const [firstGame, setFirstGame] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [gameData, setGameData] = useState({bet:0, bombs:3});
  
  const startGame = (data) => {
    setGameData(data);
    setRunning(true);
    if (firstGame) { setFirstGame(false); }
  }

  return (
    <GameContext.Provider value={
      {
        firstGame: firstGame,
        isRunning: isRunning,
        startFirstGame: () => setFirstGame(false),
        endGame: () => setRunning(false)
      }
    }>
      <section className={styles.game}>
        <Settings onStart={startGame} />
        <Board gameData={gameData} />
      </section>
    </GameContext.Provider>
  );
}

export default App;
