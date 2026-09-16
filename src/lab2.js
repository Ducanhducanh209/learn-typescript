"use strict";
var productRate;
(function (productRate) {
    productRate["low"] = "th\u1EA5p";
    productRate["medium"] = "trung b\u00ECnh";
    productRate["hight"] = "cao";
})(productRate || (productRate = {}));
const product = {
    name: "laptop",
    rate: productRate.low,
    sale: false,
    price: 100
};
console.log(product);
const listProduct = [
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
function themPhanTu(list) {
    return list.map((product) => {
        return {
            ...product,
            description: product.price > 5 ? "Tốt" : "Bình thường"
        };
    });
}
console.log(themPhanTu(listProduct));
