let coffees = ['Latte', 'Cappuccino', 'Americano']

function search(){
    let coffeeName = prompt('Поиск по названию: ')
    let number = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase())

    if (number !== -1) {
        alert(`Ваш кофе ${coffees[number]}. Он ${number + 1}-й по популярности в нашей кофейне!`)
    } else {
        alert('Такого вида кофе нет в наличии!')
    }
}

search()