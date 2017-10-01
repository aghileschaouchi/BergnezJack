var myHand = new Hand();
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+
yourHand.score());

if(yourHand.score() > myHand.score())
console.log("you win!");

else if(yourHand.score() < myHand.score())
console.log("I win!");

else
console.log("We tied!");