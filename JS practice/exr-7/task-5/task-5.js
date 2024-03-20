let clientsEstimation = []
let answ = alert(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"))
answ = Number(answ);

function askClientToGiveEstimation () {

  if (answ >= 1 && answ <= 10) {
    clientsEstimation.push(answ)
  }
}

for (let i = 0; i < 5; i++){
  askClientToGiveEstimation()
}

let goodEstimations = clientsEstimation.filter(answ > 5)
let badEstimations = clientsEstimation.filter(answ < 5)

alert(`Всего положительных оценок - ${goodEstimations}, а плохих - ${badEstimations}`)