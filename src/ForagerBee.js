// subclass of Grub
var ForagerBee = function(food) {
  Grub.call(this, food);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype); // set inheritence
ForagerBee.prototype.constructor = ForagerBee; // set ForagerBee constructor function

ForagerBee.prototype.forage = function(treasure) {
  (this.treasureChest).push(treasure);
};