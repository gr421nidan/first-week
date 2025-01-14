const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "[alice@example.com](<mailto:alice@example.com>)",
    notes: null,
};

const countFilledValues = (obj: Record<string, unknown>) => {
    let count= 0;
    for(let i in obj){
        if(obj[i] != null && obj[i] != '' && obj[i] != undefined){
            count++;
     }
 }
 return count;
}
console.log(countFilledValues(data));
