function identicalLetters(str1: string, str2: string){
    const string1 = new Set(str1.toLowerCase());
    const string2 = new Set(str2.toLowerCase());
    const letters: string[] = [];
    string1.forEach(letter=>{
        if(string2.has(letter)){
            letters.push(letter);
        }
    });
    return letters.length > 0 ? letters.join('') : 'Нет совпадений';
}
const result = identicalLetters("фпупкогенцФйфуцкfddt", "dgвроыпоф");
console.log(result);