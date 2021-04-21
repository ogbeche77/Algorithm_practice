const codeChallengeString = "aHR0cHM6Ly9uMjYuY29tL2JyYWluLXRlYXNlcg==";

//Remove == sign from given string
console.log(codeChallengeString.replace("==", ""));

//Check if the string ends with equal to sign
console.log(codeChallengeString.endsWith("="));

//Return all string as a lowercase
console.log(codeChallengeString.toLowerCase());

//Return the first 6 characters
console.log(codeChallengeString.slice(0, 6));

//Return only numbers n the string
console.log(codeChallengeString.match(/\d+/g));

//Return the last character in the string
codeChallengeString.charAt(codeChallengeString.length - 1);

//Sort the given string in order
console.log(codeChallengeString.split("").sort().join(""));

//Reverse the string
const reverseString = (string) => {
  return string.split("").reverse().join("");
};
reverseString(codeChallengeString);

//Convert small letter to capital and vise versa
const convertLetters = (string) => {
  return string.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
};
convertLetters(codeChallengeString);

// Convert Array to string
const changeStringToArray = (string) => {
  return string.trim().split(" ");
};
changeStringToArray(codeChallengeString);

//Shuffle the given string

const shuffelString = (codeChallengeString) => {
  let newString = "";
  codeChallengeString = codeChallengeString.split("");
  while (codeChallengeString.length > 0) {
    newString += codeChallengeString.splice(
      (codeChallengeString.length * Math.random()) << 0,
      1
    );
  }
  return newString;
};
shuffelString(codeChallengeString);

//Count the amount of times each characters appear in the given string
const countCharacters = (codeChallengeString) => {
  const count = {};

  codeChallengeString.split("").forEach((character) => {
    count[character] = count[character] ? ++count[character] : 1;
  });

  return count;
};
countCharacters(codeChallengeString);
