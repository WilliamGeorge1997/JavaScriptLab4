//1- Using Constructor Functions
function Person(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  Person.prototype.sleep = function(hours) {
    if (hours === 7) {
      this.sleepMood = 'happy';
    } else if (hours < 7) {
      this.sleepMood = 'tired';
    } else {
      this.sleepMood = 'lazy';
    }
  };
  

  Person.prototype.eat = function(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  };

  Person.prototype.buy = function(items) {
    this.money -= items * 10;
  };

  // Example usage:
const steven = new Person("Steven Paul", 100, 'happy', 80);
steven.sleep(8);
steven.eat(2);
steven.buy(3);
console.log(steven);
//--------------------------------------------------------------------------------  
//2- Using Classes
class Person2 {
    constructor(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
    }
  
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    }
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    }
  
    buy(items) {
      this.money -= items * 10;
    }
  }
 // Example usage:
const jason = new Person2("Jason Edward", 150, 'happy', 90);
jason.sleep(6);
jason.eat(3);
jason.buy(2);
console.log(jason);
//--------------------------------------------------------------------------------
//3- Using Objects Linking to Other Objects (OLOO)
const Person3 = {
    init(fullName, money, sleepMood, healthRate) {
      this.fullName = fullName;
      this.money = money;
      this.sleepMood = sleepMood;
      this.healthRate = healthRate;
      return this;
    },
  
    sleep(hours) {
      if (hours === 7) {
        this.sleepMood = 'happy';
      } else if (hours < 7) {
        this.sleepMood = 'tired';
      } else {
        this.sleepMood = 'lazy';
      }
    },
  
    eat(meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },
  
    buy(items) {
      this.money -= items * 10;
    }
  };
  // Example usage:
  const john = Object.create(Person3).init('John Doe', 100, 'happy', 100);
  john.sleep(7);
  john.eat(1);
  john.buy(4);
  console.log(john);
//--------------------------------------------------------------------------------
//4- Using Factory Functions
function createPerson(fullName, money, sleepMood, healthRate) {
    return {
      fullName,
      money,
      sleepMood,
      healthRate,
  
      sleep(hours) {
        if (hours === 7) {
          this.sleepMood = 'happy';
        } else if (hours < 7) {
          this.sleepMood = 'tired';
        } else {
          this.sleepMood = 'lazy';
        }
      },
  
      eat(meals) {
        if (meals === 3) {
          this.healthRate = 100;
        } else if (meals === 2) {
          this.healthRate = 75;
        } else if (meals === 1) {
          this.healthRate = 50;
        }
      },
  
      buy(items) {
        this.money -= items * 10;
      }
    };
  }
 // Example usage:
  const charles = createPerson('Charles Matthew', 100, 'happy', 100);
  charles.sleep(6);
  charles.eat(2);
  charles.buy(1);
  console.log(charles);