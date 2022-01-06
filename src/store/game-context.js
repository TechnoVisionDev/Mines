import React from "react";

const GameContext = React.createContext({
    firstGame: true,
    isRunning: false
});

export default GameContext;