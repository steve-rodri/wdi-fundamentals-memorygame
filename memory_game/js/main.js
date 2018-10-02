var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];
var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
};

var flipCard = function (cardID){
	console.log("User flipped "+ cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);

if (cardsInPlay.length === 2) {
	checkForMatch();
};
};

flipCard(0);
console.log(cards[0].cardImage);
console.log(cards[0].suit);
flipCard(2);
console.log(cards[2].cardImage);
console.log(cards[2].suit);