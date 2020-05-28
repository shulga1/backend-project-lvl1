const getRandomNumber = () => {
  const randomNumber = Math.random() * 100;
  return Math.round(randomNumber);
};

const isEven = (num) => {
  const even = num % 2 === 0;
  return even ? 'yes' : 'no';
};

export { getRandomNumber, isEven };
