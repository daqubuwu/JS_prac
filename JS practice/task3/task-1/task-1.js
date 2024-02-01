let string = "42";
console.log(Number(string), Boolean(string), String(string));

let number = 0;
console.log(Number(number), Boolean(number), String(number));

let boolean = false;
console.log(Number(boolean), Boolean(boolean), String(boolean));

let variable4 = null;
console.log(Number(variable4), Boolean(variable4), String(variable4));

let undefined = undefined;
console.log(Number(undefined), Boolean(undefined), String(undefined));

let example = { key: "value" };
console.log(Number(example), Boolean(example), String(example));

let bigInt = 9007199254740993n;
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));

let symbol = Symbol('unique');
console.log(Boolean(symbol), String(symbol));