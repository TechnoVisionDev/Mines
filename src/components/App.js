import {useState} from 'react';

import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import GameContext from '../store/game-context';
import styles from './App.module.css';

function App() {

  const [firstGame, setFirstGame] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [cashout, setCashout] = useState(false);
  const [money, setMoney] = useState(5000);
  const [gameData, setGameData] = useState({bet:0, bombs:3});
  
  const startGame = (data) => {
    setMoney(money - data.bet);
    setGameData(data);
    setRunning(true);
    if (firstGame) { setFirstGame(false); }
  }

  const endGame = (isCashout) => {
    setRunning(false);
    if (isCashout) { 
      setMoney(money + gameData.bet);
      setCashout(true);
    }
  }

  return (
    <GameContext.Provider value={
      {
        money: money,
        firstGame: firstGame,
        isRunning: isRunning,
        startGame: startGame,
        endGame: endGame
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
