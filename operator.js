// Operators (ตัวดำเนินการ)

// 1. เครื่องหมายทางคณิตศาสตร์
let a = 10;
let b = 5;

console.log(a + b);  // บวก: 15
console.log(a - b);  // ลบ: 5
console.log(a * b);  // คูณ: 50
console.log(a / b);  // หาร: 2
console.log(a % b);  // หารเอาเศษ: 0
console.log(a ** b); // ยกกำลัง: 100000

// 2. ตัวดำเนินการเปรียบเทียบ
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a === b); // false (เท่ากับและชนิดข้อมูลเหมือนกัน)
console.log(a !== b); // true (ไม่เท่ากับ)

// 3. ตัวดำเนินการทางตรรกศาสตร์
let x = true;
let y = false;
console.log(x && y); // AND: false
console.log(x || y); // OR: true
console.log(!x);     // NOT: false
