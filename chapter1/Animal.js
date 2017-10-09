/**
 * Created by shuiqin on 9/27/17.
 */
class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  shout(){
    return `My name is ${this.name}, age is ${this.age}`;
  }

  static foo(){
    return  'Here is a static method';
  }
}

const cow = new Animal('betty', 2);
console.log(cow.shout());
console.log(Animal.foo());

class Dog extends Animal{
  constructor(name, age=2, color='black'){
    //在构造函数中可以直接调用super方法
    super(name, age);
    this.color = color;
  }
  shout(){
    return super.shout() + `, color is ${this.color}`;
  }
}

const jackTheDog = new Dog('jack');
console.log(jackTheDog.shout());