//input validation
export const vowelsAndConsonants = (sentence) => {
  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  const sentenceArray = sentence.toLowerCase().split("");

  const hasAlphabets = sentenceArray.some((character) => {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    return alphabets.includes(character);
  });

  if (!hasAlphabets) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }

  let countVowels = 0;
  let countConsonants = 0;
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  sentenceArray.forEach((character) => {
    if (vowels.includes(character)) {
      countVowels = countVowels + 1;
    }
    if (consonants.includes(character)) {
      countConsonants = countConsonants + 1;
    }
  });
  return `Vowels: ${countVowels} |Consonants: ${countConsonants} `;
};
