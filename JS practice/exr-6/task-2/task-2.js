function getSumOfNumbers(number, type) {
    let i = 0;
    let sum = 0;
    
    if (type === '') {
      do {
        i++;
        sum += i;
      } while (i < number)
      console.log(sum);
    }
    else if (type === 'odd') {
      do {
        if (i % 2 !== 0) {
          sum += i;
        }
        i++;
      } while (i < number)
      console.log(sum);
    }
    else if (type === 'even') {
      do {
        if (i % 2 == 0) {
          sum += i;
        }
        i++;
      } while (i <= number)
      console.log(sum);
    }
  }
  
  getSumOfNumbers(10, 'odd');
  getSumOfNumbers(10, 'even')
  getSumOfNumbers(10, '');