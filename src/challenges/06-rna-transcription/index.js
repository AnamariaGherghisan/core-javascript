export const rnaTranscription = (dna) => {
  //check if dna is a non empty string
  if (!dna || typeof dna !== "string") {
    return "Failed to retrieve RNA transcription: Invalid DNA strand";
  }
  // normalize the dna string to upper case and store it in a variable called "normalizedDna"
  const normalizedDna = dna.toUpperCase();
  // convert "normalizedDna" to an array and store in a variable called "dnaArray"
  const dnaArray = normalizedDna.split("");
  // apply every method on "dnaArray" and store result in a variable called "isValid"
  const isValid = dnaArray.every((character) => {
    // check if character is included in "GCTA"
    return "GCTA".includes(character);
  });
  // if "isValid" is false return failed message
  if (!isValid) {
    return "Failed to retrieve RNA transcription: Invalid DNA strand";
  }
  // map through the "dnaArray" and store output in "rnaArray"
  const rnaArray = dnaArray.map((character) => {
    //if character A returns  U
    if (character === "A") {
      return "U";
    }
    //if character G returns C
    if (character === "G") {
      return "C";
    }
    //if character C returns G
    if (character === "C") {
      return "G";
    }
    //if character T returns A
    if (character === "T") {
      return "A";
    }
  });
  // convert "rnaArray" to string using join method and store in variable "rna"
  const rna = rnaArray.join("");
  // return template literal with "rna"
  return `RNA strand: ${rna}`;
};
