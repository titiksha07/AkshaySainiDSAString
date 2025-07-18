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
  //       lPointer =0;
  //       rPointer = 0;
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // console.log(balanced('RLRRRLLRLL'));

  /* Reverse String 2 (with k and 2k steps) */

//   var reverseStr = function(s, k) {
//     s = s.split('');
//     for(let i=0; i<s.length; i= i+(2*k)) {
//         let mid = Math.floor(k/2);
//         for(let j=0; j<mid; j++) {
//             let temp = s[j+i];
//             s[j+i] = s[k-j-1+i];
//             s[k-j-1+i] = temp;
//         }
//     }
//     return s.join('');
// };

/*Largest Odd in a string */

// function largestOdd(str) {
//   for(let i=str.length-1; i>=0; i--) {
//     if(parseInt(str[i]) % 2 !==0) {
//       str = str.slice(0,i+1);
//       break;
//     }
//   }
//   return str;
  
// }
// console.log(largestOdd(largestOdd('32456')));

/*Longest Common Prefix */

// function longestCommonPrefix(str) {
//   let x = 0;
//   while(x<= str[0].length) {
//     let ch = str[0][x];
//     for(let i=1; i<str.length; i++) {
//       if(ch !== str[i][x] || x=== str[i].length) {
//         return str[0].slice(0,x);
//       }
//     }
//     x++;
//   }
//   return str[0];
  
// }
// console.log(longestCommonPrefix(['flower','flow','flosh']));

//* Check for Valid anagram */

// function anagram(s,t) {
//   let map ={};
//   if(s.length !== t.length) return false;
//   for(let i=0; i<s.length; i++) {
//     if(!map[s[i]]) {
//       map[s[i]] = 1;
//     } else {
//       map[s[i]]++;
//     }
//   }
  
//   for(let i=0; i<t.length; i++) {
//     if(!map[t[i]] || map[t[i]]<0) {
//       return false;
//     } else {
//       map[t[i]]--;
//     }
//   }
//   return true;
   
//  }
//  console.log(anagram(['anagram','nagaram']));


}
