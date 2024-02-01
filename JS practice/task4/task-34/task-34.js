let userString = prompt('Введите текст для обрезки')
userString= userString.trim()
const startSliceIndex =+ prompt('Введите индекс с которого нужно начать обрезку строки')
const endSliceIndex =+ prompt('Введите индекс, которым нужно закончить обрезку строки')
alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);