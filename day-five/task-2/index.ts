//оптимальное разбиение суммы на купюры
async function splittingTheSum(n: number) {
    const bills: number[] = [100, 50, 10, 5, 2, 1];
    let result: Record<string, number> = {}
    if (n <= 0 || n % 1 != 0) throw new Error('Вы не можете разменять! Введите положительное целое число!');
    let i = 0;
    while (n > 0 && i < bills.length) {
        let count: number = Math.floor(n / bills[i]);
        if(count>0){
            n -= bills[i] * count;
            let resultsKey: string = bills[i].toString();
            //вот тут записываю только те купюры и их количество, на которые произошел размен
            result[resultsKey] = count
        }
        i++;
    }
    return result;
}

splittingTheSum(19234).then(console.log).catch((error) => {
    console.error(error.message)
});
