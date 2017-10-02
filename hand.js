function Hand() {
    // examples of the deal function in action
    var cardArray = [card1, card2];
    this.cardArray[card1] = deal();
    this.cardArray[card2] = deal();
    
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
        this.cardArray.forEach(function(card) {
            sum = sum + card.getValue();
            
            //If the card in an ace
            if(card.getNumber == 1){
                //We add its value to the score normally
                //If our score is over 21, lets reduce ot bu 10 (ACE !)
                if(sum > 21)
                    sum = sum - 10;
            }
        });
        return sum;
    }

    function getHeand(){
        return this.cardArray;
    }

    function printHand(){
        this.carArray.forEach(function(card) {
            myHand = myHand + card.getNumber() + " of suit ";
            
            switch(card.getSuit()) {
                case 1:
                    myHand = myHand + "Hearts";
                    break;
                case 2:
                    myHand = myHand + "Diamonds";
                    break;
                
                case 3:
                    myHand = myHand + "Clubs";
                    break;
                default:
                    myHand = myHand + "Pads";
            } 

        });
        return myHand;
    }

    function hitMe(){
        newCard = this.deal();
        this.cardArray.append(newCard);
    }
}