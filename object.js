// Objects (ออบเจ็กต์)

// สร้าง object
let person = {
  name: "สมชาย",
  age: 25,
  isStudent: true,
  sayHi: function () {
    console.log(`สวัสดี ฉันชื่อ ${this.name}`);
  },
};

// การเข้าถึง properties
console.log(person.name); // แบบจุด
console.log(person["age"]); // แบบวงเล็บเหลี่ยม

// การเพิ่ม/แก้ไข properties
person.email = "somchai@email.com";
person.age = 26;

// Object Methods
console.log(Object.keys(person)); // รายการ keys
console.log(Object.values(person)); // รายการ values
console.log(Object.entries(person)); // รายการ key-value pairs
