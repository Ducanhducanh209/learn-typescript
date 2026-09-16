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
    price: 100
};
console.log(product);
const listProduct = [
    {
        name: "laptop",
        rate: productRate.low,
        price: 100
    },
];
