//камень ножницы бумага
async function game(playerChoice: string) {
    const options: string[] = ['Камень', 'Ножницы', 'Бумага'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let message: string;
    if (options.includes(playerChoice)) {
        if (computerChoice == playerChoice) message = 'Ничья!';
        else if (playerChoice == 'Камень' && computerChoice == 'Ножницы' || playerChoice == 'Ножницы' && computerChoice == 'Бумага' || playerChoice == 'Бумага' && computerChoice == 'Камень') message = 'Игрок победил!';
        else message = 'Компьютер выиграл!';
    } else throw new Error('Ошибочка! Неверный выбор игрока');
    return `Выбор игрока: ${playerChoice};\nВыбор компьютера: ${computerChoice};\n${message}`;
}

game('Камень').then(console.log).catch((error) => {
    console.error(error.message)
});
