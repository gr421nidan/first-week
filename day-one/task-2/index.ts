function longestWord(str: string){
    const words = str.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const result = longestWord("Супер предложение для проверки");
console.log(result);