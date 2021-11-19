class Human {
  constructor(speak, walk, weight, color) {
    this.speak = speak;
    this.walk = walk;
    this.weight = weight;
    this.color = color;
  }
  maySpeak() {
    console.log(`May speak: ${this.speak}`)
  }
  mayWalk() {
    console.log(`May walk: ${this.walk}`)
  }
  weightInfo() {
    console.log(`Weight: ${this.weight}`)
  }
  colorInfo() {
    console.log(`Color: ${this.color}`)
  }
}

//let newHumen = new Human('yes', 'no', 103, 'black');
//newHumen.maySpeak()
//newHumen.mayWalk()
//newHumen.weightInfo()
//newHumen.colorInfo()


class Woman extends Human {
  constructor(sex, speak, walk, weight, color) {
    super(speak, walk, weight, color);
    this.sex = sex;
  }
  whatSex() {
    console.log(`Sex: ${this.hunt}`)
  }
}

class Librarian extends Woman {
  constructor(sex, speak, walk, weight, color, read, findBook) {
    super(sex, speak, walk, weight, color);
    this.read = read;
    this.findBook = findBook;
  }
  mayRead() {
    console.log(`May read: ${this.read}`)
  }
  mayFindBook() {
    console.log(`Can find the book  quickly: ${this.findBook}`)
  }
  whatIsDoingInZoo() {
    console.log('LIBRARIAN: reads books for animals');
    this.mayRead();
    this.mayFindBook();
  }
}
class Nurse extends Woman {
  constructor(sex, speak, walk, weight, color, anatomy, makeInjection) {
    super(sex, speak, walk, weight, color);
    this.anatomy = anatomy;
    this.makeInjection = makeInjection;
  }
  knowAnatomy() {
    console.log(`Knows anatomy: ${this.anatomy}`);
  }
  giveInjection() {
    console.log(`Сan give injection: ${this.makeInjection}`);
  }
  whatIsDoingInZoo() {
    console.log('NURSE: treats animals');
    this.knowAnatomy();
    this.giveInjection();
  }
}
//let newWoman = new Woman('female','yes', 'no', 103, 'black');
//newWoman.mayWalk()

class Man extends Human {
  constructor(sex, speak, walk, weight, color) {
    super(speak, walk, weight, color);
    this.sex = sex;
  }
  whatSex() {
    console.log(`Sex: ${this.hunt}`)
  }
}


class Hunter extends Man {
  constructor(sex, speak, walk, weight, color, hunt, shoot) {
    super(sex, speak, walk, weight, color);
    this.hunt = hunt;
    this.shoot = shoot;
  }
  canHunt() {
    console.log(`Can hunt: ${this.hunt}`)
  }
  canShoot() {
    console.log(`Сan shoot: ${this.shoot}`)
  }
  whatIsDoingInZoo() {
    console.log('HUNTER: catches animals');
    this.canHunt();
    this.canShoot();
  }
}

class Worker extends Man {
  constructor(sex, speak, walk, weight, color, dig, driveNail) {
    super(sex, speak, walk, weight, color);
    this.dig = dig;
    this.driveNail = driveNail;
  }
  canDig() {
    console.log(`Can dig: ${this.dig}`)
  }
  canDriveNail() {
    console.log(`Сan shoot: ${this.driveNail}`)
  }
  whatIsDoingInZoo() {
    console.log('WORKER: takes care of animals');
    this.canDig();
    this.canDriveNail();
  }
}



class Animals {
  constructor(walk, run, wool, color) {
    this.walk = walk;
    this.run = run;
    this.wool = wool;
    this.color = color;
  }
  mayWalk() {
    console.log(`May walk: ${this.walk}`)
  }
  mayRun() {
    console.log(`May run: ${this.run}`)
  }
  woolInfo() {
    console.log(`Has wool: ${this.wool}`)
  }
  colorInfo() {
    console.log(`Color: ${this.color}`)
  }
}

class Herbivorous extends Animals {
  constructor(walk, run, wool, color, food) {
    super(walk, run, wool, color);
    this.food = food;
  }
  eat() {
    console.log(`Type of food: ${this.food}`)
  }
}

class Rabbit extends Herbivorous {
  constructor(walk, run, wool, color, food, jump) {
    super(walk, run, wool, color, food);
    this.jump = jump;
  }
  canJump() {
    console.log(`Can jump: ${this.jump}`)
  }
  whatIsDoingInZoo() {
    console.log('RABBIT: eats all carrots');
    this.canJump();
  }
}

class Giraffe extends Herbivorous {
  constructor(walk, run, wool, color, food, longNeck) {
    super(walk, run, wool, color, food);
    this.longNeck = longNeck;
  }
  haveLongNeck() {
    console.log(`Has long neck: ${this.longNeck}`)
  }
  whatIsDoingInZoo() {
    console.log('GIRAFFE: sees everything and everyone');
    this.haveLongNeck();
  }
}

class Predator extends Animals {
  constructor(walk, run, wool, color, food) {
    super(walk, run, wool, color);
    this.food = food;
  }
  eat() {
    console.log(`Type of food: ${this.food}`)
  }
}

class Woolf extends Predator {
  constructor(walk, run, wool, color, food, howl) {
    super(walk, run, wool, color, food);
    this.howl = howl;
  }
  canHowl() {
    console.log(`Can howl: ${this.howl}`)
  }
  whatIsDoingInZoo() {
    console.log('WOOLF: has its own flock');
    this.canHowl();
  }
}

class Lion extends Predator {
  constructor(walk, run, wool, color, food, king) {
    super(walk, run, wool, color, food);
    this.king = king;
  }

  kingOfBeasts() {
    console.log(`King of beasts: ${this.king}`)
  }
  whatIsDoingInZoo() {
    console.log('LION: sleeps all day');
    this.kingOfBeasts();
  }
}

class Zoo {
  constructor() {
    this.arrayPeople = [];
    this.arrayAnimal = [];
  }
  addPeople(people) {
    this.arrayPeople.push(people);
  }
  addAnimal(animal) {
    this.arrayAnimal.push(animal);
  }
  showPersonal() {
    for (let i = 0; i < this.arrayPeople.length; i++) {
      this.arrayPeople[i].whatIsDoingInZoo();
    }
  }
  showAnimals() {
    for (let i = 0; i < this.arrayAnimal.length; i++) {
      this.arrayAnimal[i].whatIsDoingInZoo();
    }
  }
}
class Command {
  constructor(subject) {
    this.subject = subject;
  }
  execute(command) {
    return this.subject[command]()
  }
}
let zooNew = new Zoo();
const x = new Command(zooNew);

let newPeople = new Librarian('male', 'yes', 'yes', 70, 'black', 'yes', 'yes');
let newPeople2 = new Nurse('male', 'yes', 'yes', 50, 'white', 'yes', 'yes');
let newPeople3 = new Hunter('male', 'yes', 'yes', 90, 'white', 'yes', 'yes');
let newPeople4 = new Worker('male', 'yes', 'yes', 110, 'white', 'yes', 'yes');
let newAnimal = new Rabbit('yes', 'yes', 'yes', 'white', 'herbivorous', 'yes');
let newAnimal2 = new Giraffe('yes', 'yes', 'yes', 'white', 'herbivorous', 'yes');
let newAnimal3 = new Woolf('yes', 'yes', 'yes', 'white', 'Predator', 'yes');
let newAnimal4 = new Lion('yes', 'yes', 'yes', 'white', 'Predator', 'yes');
zooNew.addPeople(newPeople);
zooNew.addPeople(newPeople2);
zooNew.addPeople(newPeople3);
zooNew.addPeople(newPeople4);
zooNew.addAnimal(newAnimal);
zooNew.addAnimal(newAnimal2);
zooNew.addAnimal(newAnimal3);
zooNew.addAnimal(newAnimal4);

x.execute('showPersonal')
x.execute('showAnimals');



