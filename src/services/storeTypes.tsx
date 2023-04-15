interface IStoreItem {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    type: "bakery" | "hot" | "cold";
}

interface IOptions {
    size?: string;
}

interface IFullItem extends IStoreItem, IOptions {
    
}

export type{
    IStoreItem,
    IOptions,
    IFullItem
}