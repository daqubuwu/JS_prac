function getName1(name) {
    name = prompt("Введите имя");
    console.log(`Имя = ${name}`);
    return name;
  }
  getName1();
  
  const getName2 = function (name) {
    name = prompt("Введите имя");
    console.log(`Имя = ${name}`);
    return name;
  };
  getName2();
  
  const getName3 = (name) => {
    name = prompt("Введите имя");
    console.log(`Имя = ${name}`);
    return name;
  };
  getName3();