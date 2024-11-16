// 1. Number - ตัวเลข
let age = 25; // จำนวนเต็ม
let price = 99.99; // ทศนิยม
let temperature = -5; // ตัวเลขติดลบ

// 2. String - ข้อความ
let firstName = "สมชาย"; // ใช้ double quotes
let lastName = "สมศรี"; // ใช้ single quotes
let address = `ถนนพระราม 9`; // ใช้ backticks

// 3. Boolean - ค่าความจริง
let isStudent = true; // จริง
let isWorking = false; // เท็จ

// 4. Undefined - ตัวแปรที่ยังไม่ได้กำหนดค่า
let unknownValue; // มีค่าเป็น undefined

// 5. Null - ตัวแปรที่ไม่มีค่า (ว่างเปล่า)
let emptyValue = null;

// 6. Array - ชุดข้อมูล
let fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];
let numbers = [1, 2, 3, 4, 5];

// 7. Object - วัตถุ
let person = {
  name: "สมชาย",
  age: 25,
  isStudent: true,
  address: {
    street: "ถนนสุขุมวิท",
    city: "กรุงเทพ",
  },
};

// การตรวจสอบชนิดข้อมูล
console.log(typeof age); // "number"
console.log(typeof firstName); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof unknownValue); // "undefined"
console.log(typeof emptyValue); // "object"
console.log(Array.isArray(fruits)); // true
console.log(typeof person); // "object"

// ตัวอย่างการแปลงชนิดข้อมูล
let numString = "123";
let num = Number(numString); // แปลงstring เป็น number
let str = String(num); // แปลง number เป็น string
let bool = Boolean(1); // แปลงเป็น boolean (true)
