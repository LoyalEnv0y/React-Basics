const roll6 = () => Math.floor(Math.random() * 6) + 1;

const getNRoll = n => Array.from({ length: n }, () => roll6());

const sumArr = arr => arr.reduce((total, curr) => total + curr, 0);

export { getNRoll, sumArr };