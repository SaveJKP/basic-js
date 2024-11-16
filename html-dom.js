// HTML DOM (Document Object Model)

// การเข้าถึง Elements
const elementById = document.getElementById("myId");
const elementsByClass = document.getElementsByClassName("myClass");
const elementsByTag = document.getElementsByTagName("div");
const elementByQuery = document.querySelector(".myClass");
const elementsByQueryAll = document.querySelectorAll(".myClass");

// การสร้าง Elements
const newDiv = document.createElement("div");
const newText = document.createTextNode("Hello World");
newDiv.appendChild(newText);

// การแก้ไข Elements
element.innerHTML = "เนื้อหาใหม่";
element.textContent = "ข้อความใหม่";
element.setAttribute("class", "newClass");
element.style.color = "red";
element.style.backgroundColor = "black";

// Event Listeners
element.addEventListener("click", function (event) {
  console.log("คลิกแล้ว!");
});

// การเพิ่ม/ลบ Classes
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("toggleClass");

// การจัดการ DOM Tree
parentElement.appendChild(newElement);
parentElement.removeChild(childElement);
parentElement.replaceChild(newElement, oldElement);

// การนำทางใน DOM
const parent = element.parentNode;
const children = element.children;
const siblings = element.nextElementSibling;
const previous = element.previousElementSibling;

// การตรวจสอบ Elements
const hasClass = element.classList.contains("myClass");
const hasAttribute = element.hasAttribute("data-id");
