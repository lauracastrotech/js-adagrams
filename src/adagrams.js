const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const getRandomIdx = () => {
  const NUM_OF_LETTERS_IN_LETTER_BANK = 96
  return Math.floor(Math.random() * NUM_OF_LETTERS_IN_LETTER_BANK)
}

const getLetterBank = (LETTER_POOL)=> {
  let letterBank = []
  for(let letter in LETTER_POOL){
    const freq = LETTER_POOL[letter]
	    letterBank.push(...letter.repeat(freq).split(''))
  }
  return letterBank
}
const setFreqOfLettersInHand = (hand) => {
  const freqOfLettersInHand = {};
  for(let ch of hand){
    if(Object.hasOwn(hand, ch)){
      freqOfLettersInHand[ch]+=1;
    }else{
      freqOfLettersInHand[ch]=1 ; 
    }
  };
  return freqOfLettersInHand;
}

const getFreqOfLetter = (letter, hand) => {
  let freq = 0
  for(let char of hand){
    if(char===letter){
      freq+=1
    }
  }
  return freq
}

export const drawLetters = () => {
  const NUM_OF_LETTERS_ALLOWED = 10
  let letterBank = getLetterBank(LETTER_POOL);
  let hand = [];

  while(hand.length < NUM_OF_LETTERS_ALLOWED){
    let randIdx = getRandomIdx();
    if(letterBank[randIdx] !== null){
        hand.push(letterBank[randIdx]);
        letterBank[randIdx] = null;
    }
  }
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const freq = setFreqOfLettersInHand(lettersInHand); 
  let idx = 0

  while(idx < input.length){
    const letterNotInHand = lettersInHand.includes(input[idx]);
    const countLetter = getFreqOfLetter(input[idx], input);
    if(countLetter > freq[input[idx]] || !letterNotInHand){
      return false;
    }
    idx++;
  }

  return true
};

export const scoreWord = (word) => {
  const BONUS_POINTS = 8;  
  const POINT_VALUES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
  };
  let score = 0;

  if(word === ''){
    return score;
  }

  for(const letter of word){
    score += POINT_VALUES[letter.toUpperCase()];
  }

  score = word.length >= 7 ? score + BONUS_POINTS : score

  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  
};
