import {useState} from 'react';

import Board from "./Board/Board";
import Settings from "./Settings/Settings";
import styles from './App.module.css';

function App() {
  const [isStarted, setStart] = useState(false);
  const [gameData, setGameData] = useState({bet:0, bombs:3});
  const startHandler = (data) => {
    setStart(true);
    setGameData(data);
  }

  return (
    <section className={styles.game}>
      <Settings onStart={startHandler} />
      <Board isStarted={isStarted} gameData={gameData} />
    </section>
  );
}

export default App;
