interface Item {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

const itemStore: Item[] = [
    {
        id: "00001",
        name: "Americano",
        image: "/coffeeWhiteBg.JPG",
        description: "A delicious staple on our menu.",
        price: 1.23
    },
    {
        id: "00001",
        name: "Americano",
        image: "/coffee.jpg",
        description: "A delicious staple on our menu.",
        price: 1.23
    },
    {
        id: "00001",
        name: "Americano",
        image: "/coffeeWhiteBg.JPG",
        description: "A delicious staple on our menu.",
        price: 1.23
    },
    {
        id: "00001",
        name: "Americano",
        image: "/coffee.jpg",
        description: "A delicious staple on our menu.",
        price: 1.23
    },
    {
        id: "00001",
        name: "Americano",
        image: "/coffeeWhiteBg.JPG",
        description: "A delicious staple on our menu.",
        price: 1.23
    },
    {
        id: "00001",
        name: "Americano",
        image: "/coffee.jpg",
        description: "A delicious staple on our menu.",
        price: 1.23
    }
]

export {
    itemStore
}