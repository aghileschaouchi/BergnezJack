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