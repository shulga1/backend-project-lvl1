const getRandomNumber = (minNum = 1, maxNum = 100) => {
  const random = (Math.random() * (maxNum - minNum) + minNum);
  return Math.round(random);
};

export default getRandomNumber;
