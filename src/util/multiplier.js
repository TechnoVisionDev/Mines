module.exports.calcMultiplier = (gemsCollected, totalBombs) => {
    let numerator = 25 - totalBombs;
    let val = numerator/25;
    for (let i=1; i<gemsCollected; i++) {
      val *= (numerator-i)/(25-i);
    }
    return 0.97 * (1/val);
}

module.exports.calcEarnings = (bet, gemsCollected, totalBombs) => {
    let reward = bet * module.exports.calcMultiplier(gemsCollected, totalBombs);
    return Math.round((reward + Number.EPSILON) * 100) / 100;
}