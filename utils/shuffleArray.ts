const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]; // Create a mutable copy of the array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random element before the current one
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap the current element with the random element
  }

  return shuffledArray;
};

export default shuffleArray;
