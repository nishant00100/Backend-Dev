function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

module.exports = { capitalize, reverseString, countVowels };
