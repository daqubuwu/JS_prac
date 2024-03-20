let coffees = ['Latte', 'Cappuccino', 'Americano']
let prices = [1.5, 2, 3];
let updatedPrices = prices.map(price => price + 0.5);


coffees.forEach((coffe, index) => {

    alert(`Стоимость кофе ${coffe} - ${updatedPrices[index]} долларс`)
}
)
