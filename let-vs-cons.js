// let vs const

// let - สามารถเปลี่ยนแปลงค่าได้
let score = 75;
score = 80; // สามารถเปลี่ยนค่าได้
let name; // สามารถประกาศโดยไม่กำหนดค่า
name = "สมชาย"; // กำหนดค่าภายหลังได้

// const - ไม่สามารถเปลี่ยนแปลงค่าได้
const PI = 3.14;
// PI = 3.15;      // Error: ไม่สามารถเปลี่ยนค่าได้

// const กับ object
const person = {
  name: "สมชาย",
};
person.name = "สมศรี"; // สามารถเปลี่ยนค่า property ได้
// person = {};        // Error: ไม่สามารถเปลี่ยน reference ได้

// Block Scope
{
  let x = 10;
  const y = 20;
}
// console.log(x);     // Error: x ไม่สามารถเข้าถึงได้นอก block
// console.log(y);     // Error: y ไม่สามารถเข้าถึงได้นอก block
