const getRandomNumber = (maxNum = 100) => {
  const randomNumber = Math.random() * maxNum;
  return Math.round(randomNumber);
};

export default getRandomNumber;
