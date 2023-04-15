interface IStoreItem {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface IOptions {
    size: string;
}

interface IFullItem extends IStoreItem, IOptions {
    
}

export type{
    IStoreItem,
    IOptions,
    IFullItem
}