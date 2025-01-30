let c = "Hello World"
let s = " fly me  to  the moon  "



function lastWordCalculator(s){

    let value = s.trim()
    let words = value.split(" ")
    let wordcount = words.length -1;
    let lastWord = words[wordcount]
    let counter = lastWord.length
    // let counter = lastWord.length
    console.log(`The last word is ${lastWord} with length ${counter}`)


}

lastWordCalculator(c);
lastWordCalculator(s);

// My Original code with my Logic

let isAnagram = (word1, word2) => {
    let word1WithoutSpace = word1.trim()
    let word2WithoutSpace = word2.trim()

    let word1ToArray = word1WithoutSpace.split(``);
    let word2ToArray = word2WithoutSpace.split(``);

    let word1sorting = word1ToArray.sort();
    let word2sorting = word2ToArray.sort();

    let word1ToString = word1sorting.toString();
    let word2ToString = word2sorting.toString();

    let word1length = word1sorting.length;
    let word2length = word2sorting.length;

    if(word1length == word2length){
        if(word1ToString == word2ToString){
            console.log(`The given words ${word1} and ${word2} is Anagram`)
        }else{
            console.log(`The given words ${word1} and ${word2} are not Anagram`)
        }
    }
    else
    {
        console.log(`The given words ${word1} and ${word2} are not Anagram`)
    }
}

isAnagram(`listen`,`silent`);
isAnagram(`hello`,`worldh`);

// after having a feedback from ChatGpt - Updated code

const areAnagram = (word1, word2) => {

    const cleanAndSort = (word) => 
        word.trim().split('').sort().join('');

    const sortedString1 = cleanAndSort(word1);
    const sortedString2 = cleanAndSort(word2);

    if(sortedString1 == sortedString2){
        console.log(`The given words ${word1} and ${word2} is Anagram`);
    }else{
        console.log(`The given words ${word1} and ${word2} are not Anagram`);
    }

}
    

areAnagram(`listen`,`silent`);
areAnagram(`hello`,`world`);