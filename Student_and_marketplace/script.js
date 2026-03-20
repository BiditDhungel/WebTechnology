// STUDENT DATA
let students = [
    {name: "Aarav Sharma", dept: "CSE", course: "DSA", marks: 85},
    {name: "Rohan Verma", dept: "IT", course: "DBMS", marks: 78},
    {name: "Priya Singh", dept: "ECE", course: "Signals", marks: 88},
    {name: "Ananya Gupta", dept: "CSE", course: "OS", marks: 92},
    {name: "Vikram Patel", dept: "ME", course: "Thermo", marks: 70},
    {name: "Sneha Reddy", dept: "CE", course: "Structures", marks: 75},
    {name: "Rahul Nair", dept: "IT", course: "Networks", marks: 80},
    {name: "Neha Joshi", dept: "CSE", course: "AI", marks: 95},
    {name: "Karan Mehta", dept: "ECE", course: "VLSI", marks: 82},
    {name: "Pooja Iyer", dept: "ME", course: "Design", marks: 77}
];

function renderStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    let search = document.getElementById("searchStudent").value.toLowerCase();
    let dept = document.getElementById("deptFilter").value;

    students.forEach(s => {
        if ((s.name.toLowerCase().includes(search)) &&
            (dept === "" || s.dept === dept)) {

            let row = `<tr>
                <td>${s.name}</td>
                <td>${s.dept}</td>
                <td>${s.course}</td>
                <td>${s.marks}</td>
            </tr>`;
            tbody.innerHTML += row;
        }
    });
}

function sortStudents() {
    students.sort((a, b) => b.marks - a.marks);
    renderStudents();
}

// MARKET DATA
let items = [
    {name: "Rice", type: "Goods", price: 50},
    {name: "TV", type: "Electronics", price: 30000},
    {name: "Phone", type: "Electronics", price: 15000},
    {name: "Wheat", type: "Goods", price: 40},
    {name: "Laptop", type: "Electronics", price: 50000},
    {name: "Milk", type: "Goods", price: 30},
    {name: "Fan", type: "Electronics", price: 2000},
    {name: "Sugar", type: "Goods", price: 45},
    {name: "Headphones", type: "Electronics", price: 1500},
    {name: "Oil", type: "Goods", price: 120}
];

let cart = [];

function renderItems() {
    let tbody = document.querySelector("#marketTable tbody");
    tbody.innerHTML = "";

    let search = document.getElementById("searchItem").value.toLowerCase();
    let type = document.getElementById("typeFilter").value;

    items.forEach(item => {
        if ((item.name.toLowerCase().includes(search)) &&
            (type === "" || item.type === type)) {

            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.type}</td>
                <td>${item.price}</td>
                <td><button onclick="addToCart('${item.name}')">Add</button></td>
            </tr>`;
            tbody.innerHTML += row;
        }
    });
}

function sortItems() {
    items.sort((a, b) => a.price - b.price);
    renderItems();
}

function addToCart(name) {
    cart.push(name);
    renderCart();
}

function renderCart() {
    let list = document.getElementById("cart");
    list.innerHTML = "";
    cart.forEach(item => {
        list.innerHTML += `<li>${item}</li>`;
    });
}

function addItem() {
    let name = document.getElementById("newItem").value;
    let type = document.getElementById("newType").value;
    let price = document.getElementById("newPrice").value;

    if (name && type && price) {
        items.push({name, type, price: Number(price)});
        renderItems();
    }
}

// Event listeners
document.getElementById("searchStudent").addEventListener("input", renderStudents);
document.getElementById("deptFilter").addEventListener("change", renderStudents);

document.getElementById("searchItem").addEventListener("input", renderItems);
document.getElementById("typeFilter").addEventListener("change", renderItems);

// Initial load
renderStudents();
renderItems();