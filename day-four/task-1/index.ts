//Асинхронная функция cleanUserData(users),
//которая принимает массив пользователей и возвращает новый массив пользователей с некоторыми условиями
interface UsersData {
    id: number;
    name: string;
    email: string;
    location: string;
    isActive: boolean;
}

const users: UsersData[] = [
    {
        id: 1,
        name: " Dasha N  ",
        email: "exampLe.example@example.com",
        location: "Tomsk",
        isActive: true,
    },
    {
        id: 2,
        name: "Masha D  ",
        email: "example.eXAMLE@example.com",
        location: "Omsk",
        isActive: false,
    },
    {
        id: 3,
        name: "MIKE JR. D.  ",
        email: "MIKE.EXAMLE@example.com",
        location: "Moscow",
        isActive: true,
    },
];

async function cleanUserData(users: UsersData[]): Promise<UsersData[]> {
    const randomNum = Math.floor((Math.random() * 10) + 1);
    console.log(`случайное число:${randomNum}`);
    try {
        if (randomNum == 5) {
            throw new Error('Упс...Случайная ошибка');
        }
        const cleanUsers = users.filter(user => user.isActive).map(user => ({
            ...user,
            name: user.name.toLowerCase().trim(),
            email: user.email.toLowerCase(),
        }));
        return cleanUsers;
    } catch (error) {
        console.error(error);
        return [];
    }
}

cleanUserData(users)
    .then((cleanUsers) => {
        console.log(cleanUsers)
    })
    .catch((error) => {
        console.error(error)
    })
