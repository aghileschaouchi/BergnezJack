function Hand() {
    // examples of the deal function in action
    var card1 = deal();
    var card2 = deal(); 
    // Make a deal function here.  It should return a new card with a suit
    // that is a random number from 1 to 4, and a number that is a random
    // number between 1 and 13
    
    function deal () {
            var randNum = Math.floor(Math.random() * 13) + 1;
            var randSuit = Math.floor(Math.random() * 4) + 1;
            //the card
            return new Card(randNum, randSuit);
    }

    function score(){
        return card1.getValue() + card2.getValue();
    }
}