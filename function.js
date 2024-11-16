// Functions (ฟังก์ชัน)

// 1. Function Declaration
function sayHello(name) {
  return `สวัสดี ${name}`;
}

// 2. Function Expression
const greet = function (name) {
  return `สวัสดี ${name}`;
};

// 3. Arrow Function
const welcome = (name) => `ยินดีต้อนรับ ${name}`;

// 4. Function with Default Parameters
function add(a = 0, b = 0) {
  return a + b;
}

// 5. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// การเรียกใช้ฟังก์ชัน
console.log(sayHello("สมชาย"));
console.log(greet("สมศรี"));
console.log(welcome("สมหมาย"));
console.log(add(5, 3));
console.log(sum(1, 2, 3, 4, 5));
