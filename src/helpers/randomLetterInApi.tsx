export const randomLettersInApi = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numLetters = Math.floor(Math.random() * 2) + 1;
  let result = "";

  for (let i = 0; i < numLetters; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet.charAt(randomIndex);
  }

  return result;
};
