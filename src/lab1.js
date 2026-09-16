"use strict";
// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function chuvihcn(chieudai, chieurong) {
    return (chieudai + chieurong) * 2;
}
console.log(chuvihcn(3, 4));
// 2. Viết 1 hàm tính tổng nhiều số
// Không biết trước số lượng tham số, sử dụng rest parameter
// 2. Viết 1 hàm tính tổng nhiều số
// Không biết trước số lượng tham số, sử dụng rest parameter
function tinhtong(...numbers) {
    let tong = 0;
    for (let i = 0; i < numbers.length; i++) {
        tong += numbers[i];
    }
    return tong;
}
console.log(tinhtong(1, 2, 3));
console.log(tinhtong(10, 20, 30, 40));
// 3. Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demkytu(chuoi, kytu) {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kytu) {
            dem++;
        }
    }
    return dem;
}
console.log(demkytu("hello", "l"));
// 4. Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function lasonguyento(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(lasonguyento(7));
console.log(lasonguyento(10));
