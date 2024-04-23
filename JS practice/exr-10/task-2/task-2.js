const dog = {
  name: "Феня",
  type: "Собака",
  makeSound() {
    return "Гав!!";
  },
  makeDomestic() {
    console.log(`
      ${this.type} по имени ${this.name} говорит ${this.makeSound()}
    `);
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSound,
      isDomastic: true,
    };
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSOund() {
    return "Чик-чик-чирик!";
  },
  makeDomestic() {
    console.log(`
      ${this.type} по имени ${this.name} говорит ${this.makeSOund()}
    `);
    return {
      name: this.name,
      type: this.type,
      makeSOund: this.makeSOund,
      isDomastic: true,
    };
  },
};

dog.makeDomestic();