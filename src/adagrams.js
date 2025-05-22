
const getRandomIdx = () => {
  const NUM_OF_LETTERS_IN_LETTER_BANK = 98
  return Math.floor(Math.random() * NUM_OF_LETTERS_IN_LETTER_BANK)
}
export const drawLetters = () => {
  // 10 Letters in a hand
  const NUM_OF_LETTERS_ALLOWED = 10
  // letterBank
  let letterBank = ['A','A','A','A','A','A','A','A','A', 'B','B', 'C', 'C', 'D', 'D', 'E', 'E','E','E','E','E','E','E','E','E','E','E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I','I','I','I','I','I','I','I','J', 'K', 'L','L','L','L', 'M', 'M', 'N','N','N','N','N','N', 'O', 'O','O','O','O','O','O','O', 'P', 'P', 'Q', 'R','R','R','R','R','R', 'S', 'S','S','S', 'T', 'T', 'T','T','T','T', 'U','U','U','U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];
  
  // Player's hand
  let hand = [];
  // Run getLetterFromBank() 10 times
  while(hand.length < NUM_OF_LETTERS_ALLOWED){
    let letter = getRandomIdx();
    if(letter !== null){
        hand.push(letterBank[letter]);
        // Set letter to null so that it can't be accessed again
        letterBank[letter] = null;
    }
  }
  // return hand
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
