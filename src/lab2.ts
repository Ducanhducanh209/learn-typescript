enum productRate {
    low = "thấp",
    medium = "trung bình",
    hight = "cao",
}


type Product = {
    name: string;
    rate: productRate;
    sale: boolean;
    price: number;
};


const product: Product = {
    name: "laptop",
    rate: productRate.low,
    sale: false,
    price: 100
};

console.log(product);


const listProduct: Product[] = [
    {
        name: "Laptop",
        price: 3,
        sale: false,
        rate: productRate.medium
    },
    {
        name: "Điện thoại",
        price: 4,
        sale: false,
        rate: productRate.medium
    },
    {
        name: "Chuột",
        price: 10,
        sale: true,
        rate: productRate.hight
    },
    {
        name: "Bàn phím",
        price: 3,
        sale: false,
        rate: productRate.medium
    },
    {
        name: "Tai nghe",
        price: 1,
        sale: true,
        rate: productRate.low
    }
];


function themPhanTu(list: Product[]) {
    return list.map((product) => {
        return {
            ...product,
            description: product.price > 5 ? "Tốt" : "Bình thường"
        };
    });
}

console.log(themPhanTu(listProduct));