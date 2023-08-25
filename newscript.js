function wordcountgenerator(text) {
    const words = text.toLowerCase().split(" ");
    
    const wordCountMap = new Map()
    

    words.forEach(word  => {
        const count = wordCountMap.get(word) || 0 ;
        wordCountMap.set(word , count + 1)
    });

    return wordCountMap;
   
}

 const str = "This is a sample text . It is a sample text to demonstrate word count in a text ."
 const wordCountMap1 = wordcountgenerator(str)
 console.log(wordCountMap1);

 
