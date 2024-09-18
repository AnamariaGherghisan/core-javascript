export const vowelAndConsonants = (sentence) => {
  //validate sentence
  if (!sentence) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }
  //convert the sentence into an array
  const sentenceArray = sentence.toLowerCase().split("");
  const hasAlphabets = sentenceArray.some((character) => {
    const alphabets = "abcdefghijklmnopqrstuvxyzw";
    return alphabets.includes(character);
  });

  if (!hasAlphabets) {
    return "Error: Invalid sentence, should contain alphabetical characters at minimum";
  }
  //initialize counters and define vowels
  let countVowels = 0;
  let countConsonants = 0;
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvxyzw";

  //process the sentence
  sentenceArray.forEach((character) => {
    if (vowels.includes(character)) {
      countVowels = countVowels + 1;
    }

    if (consonants.includes(character)) {
      countConsonants = countConsonants + 1;
    }
  });
  return "Vowels: ${countVowels} | Consonants: ${countConsonants}";
};
