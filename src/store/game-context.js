import React, {useState} from "react";
import {calcEarnings} from '../util/multiplier';

const GameContext = React.createContext({
    gems: 0,
    generateBoard: false,
    firstGame: true,
    isRunning: false,
    cashout: false,
    money: 5000,
    gameData: {bet: 0, bombs: 3},
    startGame: (data) => {},
    endGame: (isCashout) => {},
    addGem: () => {},
    preventBoardGen: () => {}
});

export const GameContextProvider = (props) => {
    const [gems, setGems] = useState(0);
    const [generateBoard, setGenerateBoard] = useState(false);
    const [firstGame, setFirstGame] = useState(true);
    const [isRunning, setRunning] = useState(false);
    const [cashout, setCashout] = useState(false);
    const [money, setMoney] = useState(5000);
    const [gameData, setGameData] = useState({bet:0, bombs:3});

    const startGame = (data) => {
        setGems(0);
        setCashout(false);
        setMoney(money - data.bet);
        setGameData(data);
        setRunning(true);
        if (firstGame) { setFirstGame(false); }
        setGenerateBoard(true);
      }
    
    const endGame = (isCashout) => {
        setRunning(false);
        if (isCashout) {
          setMoney(money + calcEarnings(gameData.bet, gems, gameData.bombs));
          setCashout(true);
        }
      }
    
    const addGem = () => setGems(gems + 1);

    const preventBoardGen = () => setGenerateBoard(false);

    return (
        <GameContext.Provider 
            value={{
                generateBoard,
                gems,
                firstGame, 
                isRunning, 
                cashout, 
                money, 
                gameData,
                startGame,
                endGame,
                addGem,
                preventBoardGen
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
}

export default GameContext;