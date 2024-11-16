// Classes and Objects (คลาสและออบเจ็กต์)

// การสร้างคลาส
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  sayHello() {
    return `สวัสดี ฉันชื่อ ${this.name} อายุ ${this.age} ปี`;
  }

  // Static Method
  static isAdult(age) {
    return age >= 18;
  }

  // Getter
  get info() {
    return `${this.name} (${this.age})`;
  }

  // Setter
  set personName(newName) {
    this.name = newName;
  }
}

// การสืบทอด (Inheritance)
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    return `${this.name} กำลังเรียนอยู่`;
  }
}

// การสร้าง Object จาก Class
let person1 = new Person("สมชาย", 25);
let student1 = new Student("สมศรี", 20, "6321600001");
