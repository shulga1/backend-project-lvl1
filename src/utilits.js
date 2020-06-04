const getRandomNumber = (minNum = 0, maxNum = 100) => {
  const random = (Math.random() * (maxNum - minNum) + minNum);
  return Math.floor(random);
};

export default getRandomNumber;
