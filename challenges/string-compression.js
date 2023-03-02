/* Given an array of characters chars, compress it using the following algorithm:
   Begin with an empty string s. For each group of consecutive repeating characters in chars:

   -If the group's length is 1, append the character to s.
   -Otherwise, append the character followed by the group's length.

   The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

   After you are done modifying the input array, return the new length of the array.

   You must write an algorithm that uses only constant extra space.
*/

var compress = function(chars) {
  let charCount = 1;
  let j = 0;

  for (var i = 1; i <= chars.length; i++) {
    if (i === chars.length || chars[i] !== chars[i-1]) {
      if (charCount > 1) {
        let s = `${chars[i-1]}${charCount}`.split('');
        s.forEach((input) => {
          chars[j] = input;
          j++
        })
        charCount = 1;
      } else {
        chars[j] = chars[i-1];
        j++;
      }
    } else {
      charCount++;
    }
  }

  console.log(chars);
  return j;
};