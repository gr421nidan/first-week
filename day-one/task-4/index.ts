function runLengthEncoding(str: string): string {
    let encoded = '';
    let count = 1;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            encoded += str[i] + '-' + count;
            count = 1;
        }
    }
    return encoded;
}

function runLengthDecoding(encoded: string): string {
    let decoded = '';
    let i = 0;
    while (i < encoded.length) {
        const char = encoded[i];
        let count = '';
        i++;
        while (i + 1 < encoded.length && !isNaN(parseInt(encoded[i + 1]))) {
            count += encoded[i + 1];
            i++;
        }
        decoded += char.repeat(parseInt(count));
    }
    return decoded;
}
const string = 'ffAAiiiTTT'
const encoded = runLengthEncoding(string);
console.log(encoded);

const decoded = runLengthDecoding(encoded);
console.log(decoded);