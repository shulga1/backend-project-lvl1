const getRandomNumber = (minNum = 0, maxNum = 100) => (Math.random() * (maxNum - minNum) + minNum);

export default getRandomNumber;
