const orders = [
  { product: "Laptop", price: 1200, quantity: 2 },
  { product: "Mouse", price: 25, quantity: 4 },
  { product: "Keyboard", price: 70, quantity: 3 }
];




const users = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 21 },
  { name: "Sami", age: 20 },
  { name: "Olim", age: 22 }
];

const result2 = users.reduce((obj, user) => {
  if (!obj[user.age]) {
    obj[user.age] = [];
  }

  obj[user.age].push(user);

  return obj;
}, {});


const transactions = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 100 }
];

const result3 = transactions.reduce((balance, transaction) => {
  if (transaction.type === "income") {
    return balance + transaction.amount;
  }

  return balance - transaction.amount;
}, 0);


const apiUsers = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Vali", active: false },
  { id: 3, name: "Sami", active: true }
];

const result4 = apiUsers.reduce((obj, user) => {
  if (user.active) {
    obj[user.id] = user;
  }

  return obj;
}, {});


const employees = [
  { name: "Ali", department: "IT", salary: 3000 },
  { name: "Vali", department: "HR", salary: 2000 },
  { name: "Sami", department: "IT", salary: 2500 },
  { name: "Olim", department: "Finance", salary: 4000 }
];

const result5 = employees.reduce((obj, employee) => {
  if (!obj[employee.department]) {
    obj[employee.department] = 0;
  }

  obj[employee.department] += employee.salary;

  return obj;
}, {});

