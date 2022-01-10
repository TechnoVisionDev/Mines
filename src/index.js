import ReactDOM from 'react-dom';

import App from './components/App';
import { GameContextProvider } from './store/game-context';
import './index.css';

ReactDOM.render(
    <GameContextProvider>
        <App />
    </GameContextProvider>,
    document.getElementById('root'));
