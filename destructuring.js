// 1. Basic Object Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(`ชื่อ: ${name}`); // ชื่อ: John
console.log(`อายุ: ${age} ปี`); // อายุ: 30 ปี

// 2. Array Destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;
console.log(`พิกัด X: ${x}, Y: ${y}`); // พิกัด X: 10, Y: 20

// 3. Renaming while destructuring เปลี่ยนชื่อตัวแปรให้สื่อความหมาย
const user = { name: "John", age: 30 };
const { name: firstName, age: userAge } = user;
console.log(`ชื่อ: ${firstName}`); // ชื่อ: John
console.log(`อายุ: ${userAge}`); // อายุ: 30

// 4. Nested Object Destructuring
const data = {
  user: {
    id: 1,
    profile: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};
const {
  user: {
    profile: { firstName: fName, lastName: lName },
  },
} = data;
console.log(`ชื่อเต็ม: ${fName} ${lName}`); // ชื่อเต็ม: John Doe

// 5. Default Values
const settings = { theme: "dark" };
const { theme, fontSize = 16 } = settings;
console.log(`ธีม: ${theme}`); // ธีม: dark
console.log(`ขนาดตัวอักษร: ${fontSize}`); // ขนาดตัวอักษร: 16

// 6. Rest Operator with Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(`ตัวแรก: ${first}`); // ตัวแรก: 1
console.log(`ตัวที่สอง: ${second}`); // ตัวที่สอง: 2
console.log(`ที่เหลือ:`, rest); // ที่เหลือ: [3, 4, 5]

// 7. Destructuring in Function Parameters
function printUserInfo({ name, age, email = "ไม่ระบุ" }) {
  console.log(`
        ชื่อ: ${name}
        อายุ: ${age}
        อีเมล: ${email}
    `);
}

const userInfo = {
  name: "สมชาย",
  age: 25,
};

printUserInfo(userInfo);
// ผลลัพธ์:
//     ชื่อ: สมชาย
//     อายุ: 25
//     อีเมล: ไม่ระบุ

// 8. Swapping Variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`); // a = 2, b = 1

// 9. Destructuring with Computed Properties
const key = "name";
const { [key]: userName } = { name: "สมศรี" };
console.log(`ชื่อผู้ใช้: ${userName}`); // ชื่อผู้ใช้: สมศรี
