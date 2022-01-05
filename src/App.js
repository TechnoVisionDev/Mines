import Board from "./components/Board/Board";
import Settings from "./components/Settings/Settings";

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
