import {vowelAndConsonants} from 
describe("vowelAndConsonants", () => {
  it("should return expected message with vowels and consonants", () => {
    const expected = "Vowels: 5 | Consonants: 8";
    const actual = vowelAndConsonants("This is amazing");
    expect(actual).toEqual(expected);
  });
  it("should return expected message with no vowels and consonants", () => {
    const expected = "Vowels: 0 | Consonants: 17";
    const actual = vowelAndConsonants("Try my dry rhythm cry");
    expect(actual).toEqual(expected);
  });
  it("should return expected message with vowels and no consonants", () => {
    const expected = "Vowels: 11 | Consonants: 0";
    const actual = vowelAndConsonants("oo ooo ooouuu");
    expect(actual).toEqual(expected);
  });
  it("should return expected message when numbers are present", () => {
    const expected = "Vowels: 7 | Consonants: 9";
    const actual = vowelAndConsonants("Welcome to the year 2050");
    expect(actual).toEqual(expected);
  });
  it("should return expected message when special characters are present", () => {
    const expected = "Vowels: 5 | Consonants: 10";
    const actual = vowelAndConsonants("Dude where's my car?");
    expect(actual).toEqual(expected);
  });
  it("should return expected message when special characters and numbers are present", () => {
    const expected = "Vowels: 5 | Consonants: 12";
    const actual = vowelAndConsonants("Dude where's my 2nd car?");
    expect(actual).toEqual(expected);
  });
  it("should return expected error message  when no alphabets are present", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelAndConsonants("#123");
    expect(actual).toEqual(expected);
  });
  it("should return expected error message when sentence is empty", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelAndConsonants("");
    expect(actual).toEqual(expected);
  });
  it("should return expected error message when sentence is undefined", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelAndConsonants();
    expect(actual).toEqual(expected);
  });
});
