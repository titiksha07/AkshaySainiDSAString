export function setupCounter() {
  /*Find Words containing Chars */
  // function findwords(arr, x) {
  //   let res = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].includes(x)) {
  //       res = res.concat(i);
  //     }
  //   }
  //   return res;
  // }
  // console.log(findwords(['abc', 'bcd', 'aaa', 'feg'], 'a'));
  /*Jewels and Stones */
  // function findChars(jewel, stones) {
  //   const set = new Set([...jewel]);
  //   let count = 0;
  //   for (let i = 0; i < stones.length; i++) {
  //     if (set.has(stones[i])) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(findChars('aA', 'AaAbbbb'));
  /* Find maximum count of vowels and consonants */
  // function findMaxVal(s) {
  //   let charCount = {};
  //   for (let i = 0; i < s.length; i++) {
  //     let char = s[i];
  //     if (charCount[char]) {
  //       ++charCount[char];
  //     } else {
  //       charCount[char] = 1;
  //     }
  //   }
  //   let countVowel = 0;
  //   let countConst = 0;
  //   let vowels = ['a','e','i','o','u'];
  //    for (let i = 0; i < s.length; i++) {
  //     // if(vowels.includes(s[i]))
  //       if(s[i] == 'a' || s[i] =='e' || s[i] =='i' || s[i] == 'o' || s[i] =='u')
  //      {
  //         if(charCount[s[i]] > countVowel) {
  //         countVowel = charCount[s[i]];
  //       }
  //      } else if(charCount[s[i]] > countConst) {
  //        countConst = charCount[s[i]]
  //      }
  //    }
  //   return countConst + countVowel;
  // }
  // console.log(findMaxVal('successes'));
  /*Balanced string count */
  // function balanced(str) {
  //   let rPointer = 0;
  //   let lPointer = 0;
  //   let count = 0;
  //   for(let i=0; i<str.length;i++) {
  //     if(str[i] === 'R') {
  //       rPointer++;
  //     } else {
  //       lPointer++;
  //     }
  //     if(lPointer === rPointer) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(balanced('RLRRRLLRLL'));
}
