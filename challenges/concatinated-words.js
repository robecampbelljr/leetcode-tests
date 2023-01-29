/*
  Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

  A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

  @param {string[]} words
  @return {string[]}
*/

var findAllConcatenatedWordsInADict = function(words) {
  let answer = [];

  words.forEach((word, index) => {
    let concatWords = [];
    let wordArr = word.split('');

    // console.log(`Starting iteration on word: ${word}`);
    for (let i = 0; i < words.length; i++) {
       if (word.includes(words[i]) && i !== index) {
        // console.log(`Found a concat word!\n${word}`)
        concatWords.push(words[i]);
      }

      if (concatWords.length >= 2) {
        //console.log(`Pushing ${word} now...`)
        answer.push(word);
      }
    }
    // console.log('================================')
  })

  // console.log(answer)
  return answer;
};