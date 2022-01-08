export function calcMultiplier(gemsCollected, totalBombs) {
    let numerator = 25 - totalBombs;
    let val = numerator/25;
    for (let i=1; i<gemsCollected; i++) {
      val *= (numerator-i)/(25-i);
    }
    return round(0.989 * (1/val));
}

export function calcEarnings(bet, gemsCollected, totalBombs) {
    let reward = bet * calcMultiplier(gemsCollected, totalBombs);
    return round(reward);
}

export function round(num) {
    return (Math.round((num + Number.EPSILON) * 100) / 100);
}

export function addCommas(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}