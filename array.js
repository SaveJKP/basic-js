// Arrays (อาร์เรย์)

// สร้าง array
let fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

// การเข้าถึงสมาชิก
console.log(fruits[0]); // แอปเปิ้ล

// การเพิ่มและลบสมาชิก
fruits.push("มะม่วง"); // เพิ่มท้าย array
fruits.unshift("สตรอเบอรี่"); // เพิ่มหน้า array
fruits.pop(); // ลบท้าย array
fruits.shift(); // ลบหน้า array

// Array Methods
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num)); // วนลูปสมาชิก
let doubled = numbers.map((num) => num * 2); // สร้าง array ใหม่
let evenNums = numbers.filter((num) => num % 2 === 0); // กรองสมาชิก
let sum = numbers.reduce((acc, cur) => acc + cur, 0); // รวมค่าทั้งหมด
