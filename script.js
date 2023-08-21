function countWords(text) {
    // Split the text into words using regular expression
    const words = text.toLowerCase().split(" ");
  
    // Create a Map to store word counts
    const wordCountMap = new Map();
  
    // Count the occurrences of each word and store them in the Map
    if (words) {
      words.forEach(word => {
        const count = wordCountMap.get(word) || 0;
        wordCountMap.set(word, count + 1);
      });
    }
  
    return wordCountMap;
  }
  
  // Example usage:
  const text = "This is a sample text . It is a sample text to demonstrate word count in a text .";
  const wordCountMap1 = countWords(text);
  
  // Print the word count map
  wordCountMap1.forEach((count , word) => {
    console.log(`${word}: ${count}`);
  });