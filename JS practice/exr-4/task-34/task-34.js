let userName = prompt("Как вас зовут?");
userName = userName.toLowerCase();
userName = userName.trim();

let userAge = prompt("Сколько вам лет?");
userAge = Number(userAge);

alert(`Вас зовут: ${userName}, и вам ${userAge} лет!`) 