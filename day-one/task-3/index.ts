function indexOf(str: string, substr: string): number {
    const strLength = str.length;
    const substrLength = substr.length;

    if (substrLength === 0) return 0;
    for (let i = 0; i <= strLength - substrLength; i++) {
        let found = true;
        for (let j = 0; j < substrLength; j++) {
            if (str[i + j] !== substr[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }
    return -1;
}
const result = indexOf("Супер строка для проверки", "для");
console.log(result);