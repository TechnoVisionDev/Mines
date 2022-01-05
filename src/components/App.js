import Board from "./Board/Board";
import Settings from "./Settings/Settings";

import styles from './App.module.css';

function App() {
  return (
    <section className={styles.game}>
      <Settings />
      <Board />
    </section>
  );
}

export default App;
