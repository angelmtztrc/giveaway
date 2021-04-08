const disorderAnArray = (input: string[]): string[] => {
  return [...input.sort(() => Math.random() - 0.5)];
};

const getRandomNumber = (min: number = 0, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

type getRandomWinnersAndSubstitutesProps = {
  winners: string[];
  substitutes: string[];
};
const getRandomWinnersAndSubstitutes = (
  data: string[],
  quantityOfWinners: number,
  quantityOfSubstitutes: number
): getRandomWinnersAndSubstitutesProps => {
  let winners: string[] = [];
  let substitutes: string[] = [];
  let remaining: string[] = data;

  // get random winners
  for (let i = 0; i < quantityOfWinners; i++) {
    const winner = data[getRandomNumber(0, data.length - 1)];
    winners.push(winner);

    // return no-winners names
    remaining = [...remaining.filter((name: string) => name !== winner)];
  }

  // get a random substitute
  for (let i = 0; i < quantityOfSubstitutes; i++) {
    const substitute = remaining[getRandomNumber(0, remaining.length - 1)];
    substitutes.push(substitute);
  }

  return {
    winners,
    substitutes
  };
};

export { disorderAnArray, getRandomWinnersAndSubstitutes };
