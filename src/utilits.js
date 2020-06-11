const getRandomNumber = (minNum = 1, maxNum = 100) => {
  const random = ((Math.random() * (maxNum - minNum + 1)) + minNum);
  return Math.floor(random);
};

export default getRandomNumber;
