import {useState} from 'react';

import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import GameContext from '../store/game-context';
import styles from './App.module.css';

function App() {

  const [firstGame, setFirstGame] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [cashout, setCashout] = useState(false);
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
        startGame: startGame,
        endGame: (cashout) => { 
          setRunning(false);
          if (cashout) { setCashout(true); }
        }
      }
    }>
      <section className={styles.game}>
        <Settings />
        <Board gameData={gameData} />
      </section>
    </GameContext.Provider>
  );
}

export default App;
