"use strict";
function sum(a, b) {
    return a + b;
}
sum(3, 4);
function sayHello(name) {
    return "Xin chao" + name;
}
;
sayHello("duc anh");
function anhTraiSayHi(name) {
    console.log("Xin chao" + name);
}
;
const sumAB = (a, b) => {
    return a + b;
};
sumAB(3, 4);
const averageScore = (...scores) => {
    const sum = scores.reduce((total, scores) => total + scores, 0);
    return sum / scores.length;
};
console.log(averageScore(7, 8, 9, 10));
