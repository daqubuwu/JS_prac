userLogin = prompt("Введите логин")
userPassword = prompt("Введите пароль")

userLogin = userLogin.trim()
userPassword = userPassword.trim()

const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678"
if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin} !`)
} else {
    alert(`Логин и (или) пароль введены неверно!`)
}
