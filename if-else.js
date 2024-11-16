// If-Else Statements (การควบคุมการทำงานแบบมีเงื่อนไข)

let score = 75;

// if อย่างเดียว
if (score >= 80) {
  console.log("คะแนนดีมาก");
}

// if-else
if (score >= 50) {
  console.log("สอบผ่าน");
} else {
  console.log("สอบไม่ผ่าน");
}

// if-else if-else
if (score >= 80) {
  console.log("เกรด A");
} else if (score >= 70) {
  console.log("เกรด B");
} else if (score >= 60) {
  console.log("เกรด C");
} else {
  console.log("เกรด F");
}

// Ternary Operator
let result = score >= 50 ? "ผ่าน" : "ไม่ผ่าน";
