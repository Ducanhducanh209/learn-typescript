// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function chuvihcn(chieudai: number, chieurong: number) {
  return (chieudai + chieurong) * 2;
}

console.log(chuvihcn(3, 4));

// 2. Viết 1 hàm tính tổng nhiều số
// Không biết trước số lượng tham số, sử dụng rest parameter

// 2. Viết 1 hàm tính tổng nhiều số
// Không biết trước số lượng tham số, sử dụng rest parameter

function tinhtong(...numbers: number[]) {
  let tong = 0;

  for (let i = 0; i < numbers.length; i++) {
    tong += numbers[i];
  }

  return tong;
}

console.log(tinhtong(1, 2, 3));
console.log(tinhtong(10, 20, 30, 40));


