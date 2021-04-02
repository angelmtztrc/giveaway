const disorderAnArray = (input: string[]): string[] => {
  return [...input.sort(() => Math.random() - 0.5)];
};

export { disorderAnArray };
