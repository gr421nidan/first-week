// Написание fake-api.

interface Users {
    id: string,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: "active" | "delete",
};
const fakeData: Users[] = [
    {
        id: generateUUID(),
        name: "Dasha",
        phone: "+7900000000",
        email: "example.example@example.com",
        location: "Tomsk",
        status: "active",
    },
    {
        id: generateUUID(),
        name: "Masha",
        phone: "+7900000001",
        email: "example.example@example.com",
        location: "Omsk",
        status: "delete",
    },
];

function generateUUID(): string {
    return crypto.randomUUID();
}
//формат uuid=string-string-string-string-string
//ознакомилась в интернете с uuid и нашла вот такой метод генерации

async function fakeApi(delay: number) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData);
        }, delay);
    });
    return promise;
}

fakeApi(2000).then(console.log);

