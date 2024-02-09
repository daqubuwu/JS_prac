let i = 0;
do {
    let newStudent = prompt("Введите имя нового студента: ");
    i++;
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent} !`);
    }
}while (i<3);