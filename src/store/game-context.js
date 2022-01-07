import React from "react";

const GameContext = React.createContext({
    money: 5000,
    gems: 0,
    firstGame: true,
    isRunning: false
});

export default GameContext;