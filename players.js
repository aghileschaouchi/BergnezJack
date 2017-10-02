src="card.js";
src="hand.js";
function playAsDealer(){
    dealerHand =  new Hand();
    
    while(dealerHand.score() < 17){
        dealerHand.hitMe();
    }
    return dealerHand;
}

function playAsUser() {
    playerHand = new Hand();
    while(confirm("Hit me")){
        playHand.hitMe();
    }
    return playerHand;
}

function declareWinner(userHand, dealerHand){
    userScore = userHand.score();
    dealerScore = dealerHand.score();

    if(userScore > dealerScore)
        return "You win!";
    else if(userScore > dealerScore)
        return "You lose!"; 
    else
        return "You tied";
}

function playGame(){
    userHand = playAsUser();
    dealerHand = playAsDealer();
    
    declareWinner(userHand, dealerHand);

}
