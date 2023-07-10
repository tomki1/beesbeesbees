// parent class
var Bee = function(food) {
  Grub.call(this, food);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype); // set inheritence
Bee.prototype.constructor = Bee; // set Bee constructor function