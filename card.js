// make a Card constructor here.  It should take two parameters 
// representing the suit and number of the card to be created
function Card (suit, number) {
    var suit = suit;
    var number = number;

    function getSuit (suit) {
        return this.suit;
    }
    function getNumber (number) {
        return this.number;
    }
    function getValue () {
        if(this.number % 13 == 0 || this.number % 13 == 11 || this.number % 13 == 12)
            return 10;
        else if (this.number % 13 == 1)
            return 11;
        else
            return this.number % 13;
    }
}

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
    var randNum = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    //the card
    return new Card(randNum, randSuit);
};

// examples of the deal function in action
var card1 = deal();
var card2 = deal(); 