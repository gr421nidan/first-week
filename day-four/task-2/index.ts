//Агрегация
type UserWithGadget = {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    };
}

type UserWithGadgets = {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price: string | undefined
    }[];
}

const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "101", name: "Phone", price: "1000"},
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: {id: "102", name: "Tablet", price: undefined},
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "103", name: "Laptop", price: "1500"},
    },
];

function aggregateData(input: UserWithGadget[]): UserWithGadgets[] {
    const users: Record<string, UserWithGadgets> = {}
    input.forEach(({id, name, gadget}) => {
        if (!users[id]) {
            users[id] = {
                id: id,
                name: name,
                gadgets: [],
            };
        }
        users[id].gadgets.push(gadget);
    });
    const output: UserWithGadgets[] = Object.values(users);
    return output;
}

console.log(aggregateData(input));
