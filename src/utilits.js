const getRandomNumber = (minNum = 0, maxNum = 100) => Math.floor((Math.random() * (maxNum - minNum) + minNum));

export default getRandomNumber;
