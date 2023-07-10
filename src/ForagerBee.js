// subclass of bee
var ForagerBee = function(food) {
  Bee.call(this, food);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype); // set inheritence
ForagerBee.prototype.constructor = ForagerBee; // set ForagerBee constructor function

ForagerBee.prototype.forage = function(treasure) {
  (this.treasureChest).push(treasure);
};