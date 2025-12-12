export type Category = {
    id: string;
    name: string;
}

export type Product = {
    id: string;
    name: string;
    img: string;
    price: number;
    categoryId: string;
    desc: string;
}