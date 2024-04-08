const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, order) => {
  return order.map((el) => patients.find((patient) => patient.id === el));
};

console.log(giveTalonsInOrder(people, ordersArr));