function getSumOfSequence(number) {
  let arr = []
  for (let i = 1; i <= number; i++){
      arr.push(i)
  }
  return console.log(arr[0] + arr[arr.length - 1])
}

getSumOfSequence(16)