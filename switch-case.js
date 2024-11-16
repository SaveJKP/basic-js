// Switch Case Statement (การควบคุมการทำงานแบบหลายทางเลือก)

let day = 3;

switch (day) {
  case 1:
    console.log("วันจันทร์");
    break;
  case 2:
    console.log("วันอังคาร");
    break;
  case 3:
    console.log("วันพุธ");
    break;
  case 4:
    console.log("วันพฤหัสบดี");
    break;
  case 5:
    console.log("วันศุกร์");
    break;
  case 6:
    console.log("วันเสาร์");
    break;
  case 7:
    console.log("วันอาทิตย์");
    break;
  default:
    console.log("ไม่พบวันที่ระบุ");
}

// Switch case with multiple cases
let grade = "B";

switch (grade) {
  case "A":
    console.log("ดีเยี่ยม");
    break;
  case "B":
  case "B+":
    console.log("ดีมาก");
    break;
  case "C":
  case "C+":
    console.log("ดี");
    break;
  default:
    console.log("ต้องปรับปรุง");
}
