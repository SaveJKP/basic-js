// Loops (การวนซ้ำ)

// 1. for loop
for (let i = 0; i < 5; i++) {
  console.log(`รอบที่ ${i + 1}`);
}

// 2. while loop
let count = 0;
while (count < 5) {
  console.log(`นับ ${count}`);
  count++;
}

// 3. do-while loop
let num = 0;
do {
  console.log(`ตัวเลข ${num}`);
  num++;
} while (num < 5);

// 4. for...of loop (สำหรับ array)
let colors = ["แดง", "เขียว", "น้ำเงิน"];
for (let color of colors) {
  console.log(color);
}

// 5. for...in loop (สำหรับ object)
let person = { name: "สมชาย", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
