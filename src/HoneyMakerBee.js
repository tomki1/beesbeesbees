// subclass of Grub
var HoneyMakerBee = function(food) {
  Grub.call(this, food);
  this.age = 10;
  this.color = 'yellow';
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype); // set inheritence
HoneyMakerBee.prototype.constructor = HoneyMakerBee; // set HoneyMakerBee constructor function

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};