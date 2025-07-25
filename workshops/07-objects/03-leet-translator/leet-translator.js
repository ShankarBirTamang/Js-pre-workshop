
// YOUR CODE BELOW
// function leetTranslator(originalString) {
//   let leetObject = {};
//   let leetString = "";
//   originalString = originalString.toLowerCase();
//   console.log("Origianl string: ", originalString); //checkpoint

//   for (let i = 0; i < letters.length; i++) {
//     for (let j = 0; j < leetChars.length; j++) {
//       if (i === j) {
//         leetObject[letters[i]] = leetChars[j];
//       }
//     }
//   }
//   console.log("leetObject : ", leetObject); //checkpoint

//   let leetKeys = Object.keys(leetObject);
//   for (let i = 0; i < originalString.length; i++) {
//     for (let j = 0; j < leetKeys.length; j++) {
//       if (originalString[i] === leetKeys[j]) {
//         leetString += leetObject[leetKeys[j]];
//       }
//     }
//   }
//   console.log(leetString);
//   return leetString;
// }

//Alternatively , using Object.fromEntries() method and map ,split and join functions
// function leetTranslator(originalString) {
//   let leetObject = Object.fromEntries(
//     letters.map((letter, index) => [letter, leetChars[index]])
//   );
//   console.log("leetObject: ", leetObject);
//   let leetString = originalString
//     .toLowerCase()
//     .split("")
//     .map((char) => leetObject[char])
//     .join("");
//   console.log("leetString: ", leetString);

//   return leetString;
// }


let letters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z",
];

let leetChars = [
  "@", "8", "(", "|)", "3", "ph", "g", "#", "l", "_|",
  "|<", "1", "|'|'|", "//", "0", "|D", "(,)", "|2", "5", "+",
  "|_|", "|/", "|/|/'", "><", "j", "2",
];

// ✅ Leet Translator using a simple for loop
function leetTranslator(originalString) {
  // Step 1: Create the leet object
  let leetObject = {};

  for (let i = 0; i < letters.length; i++) {
    leetObject[letters[i]] = leetChars[i];
  }

  console.log("leetObject:", leetObject); // Optional: for debugging

  // Step 2: Convert the original string to lowercase and translate each character
  let leetString = "";

  originalString = originalString.toLowerCase();

  for (let i = 0; i < originalString.length; i++) {
    let char = originalString[i];
    if (leetObject[char]) {
      leetString += leetObject[char];
    } else {
      leetString += char; // Keep non-letters as they are (e.g., space, punctuation)
    }
  }

  console.log("leetString:", leetString); // Optional: for debugging

  return leetString;
}

// 🧪 Example usage:
leetTranslator("Fullstack"); // Output: "ph|_|115+@(|<"


leetTranslator("Fullstack");

/*
The map() function iterates over the letters array.

letter represents each character in letters, and i is its index.

It creates an array of key-value pairs [letter, leetChars[i]], where:

letter is the key (e.g., 'a').

leetChars[i] is the corresponding value from leetChars (e.g., '@' for 'a').
[
  ['a', '@'],
  ['b', '8'],
  ['c', '('],
  ['d', '|)'],
  ['e', '3'],
  ...
]

Object.fromEntries([...]) takes an array of key-value pairs and converts it into an object.
*/
