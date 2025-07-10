function frequencyAnalysis(originalString) {
  originalString = originalString.toLowerCase();
  let frequency = {};

  for (let char of originalString) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  
  return frequency;
}

frequencyAnalysis("abca"); // => {a: 2, b: 1, c: 1}
