import {useState} from 'react';

import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import GameContext from '../store/game-context';
import {calcEarnings} from '../util/multiplier';
import styles from './App.module.css';

let gems = 0;

function App() {

  const [firstGame, setFirstGame] = useState(true);
  const [isRunning, setRunning] = useState(false);
  const [cashout, setCashout] = useState(false);
  const [money, setMoney] = useState(5000);
  const [gameData, setGameData] = useState({bet:0, bombs:3});
  
  const startGame = (data) => {
    setCashout(false);
    setMoney(money - data.bet);
    setGameData(data);
    setRunning(true);
    if (firstGame) { setFirstGame(false); }
  }

  const endGame = (isCashout) => {
    setRunning(false);
    if (isCashout) {
      setMoney(money + calcEarnings(gameData.bet, gems, gameData.bombs));
      setCashout(true);
    }
    gems = 0;
  }

  const addGem = () => gems++;

  return (
    <GameContext.Provider value={{money, firstGame, isRunning, startGame, endGame}}>
      <section className={styles.game}>
        <Settings gameData={gameData}/>
        <Board gameData={gameData} addGem={addGem} isCashout={cashout}/>
      </section>
    </GameContext.Provider>
  );
}

export default App;
