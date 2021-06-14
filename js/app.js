/* Treehouse FSJS Techdegree t
 * Project 4 - OOP Game App
 * app.js */

let game ;

/* 
*  Upon clicking the button named "Start Game" : 
*  the phrase li elements are removed
*  the keyboard buttons are enabled to be used again
*  the 'chosen' and 'wrong' buttons are set back to the 'key' CSS class
*  the heart png images are set back to have five lives
*  a new instance of the Game class is created, the 'game' object
*  the startGame() method is called on this game object
*/ 

const startButton = document.getElementById('btn__reset') ;
startButton.addEventListener('click', (e) => {

   const phraseDiv = document.getElementById('phrase') ;
   while (phraseDiv.firstElementChild.firstChild) {
       phraseDiv.firstElementChild.removeChild(phraseDiv.firstElementChild.firstChild) ;
   }

   const buttonsChosen = document.getElementsByClassName('chosen');
   const numLoopsChosen = buttonsChosen.length ;

   for (let i = 0 ; i < numLoopsChosen ; i++) {
     buttonsChosen[0].disabled = false ;
     buttonsChosen[0].className = 'key' ;
   }  

   const buttonsWrong = document.getElementsByClassName('wrong');
   const numLoopsWrong = buttonsWrong.length ;
    
   for (let i = 0 ; i < numLoopsWrong ; i++) {
     buttonsWrong[0].disabled = false ;
     buttonsWrong[0].className = 'key' ;
   }
   
   const scoreHearts = document.querySelectorAll('img[src="images/lostHeart.png"]') ;
   const numLoopsHearts = scoreHearts.length ;

   for (let i = 0 ; i < numLoopsHearts ; i++) {
   scoreHearts[i].src = "images/liveHeart.png" ;
   }

   game = new Game();
   game.startGame();

   });

/* 
*  Upon clicking on the screen keyboard letters :
*  the handleInteraction() method is called on the game object, 
*  with the screen keyboard letter clicked, used as an argument
*/ 

const buttons = document.getElementsByClassName('key');
for (let i = 0 ; i < buttons.length ; i++) {
   const buttonClicked = buttons[i] ;
   buttonClicked.addEventListener( 'click', (e) => game.handleInteraction(buttonClicked) )
} ;

/* 
*  Upon clicking on the physical keyboard letters :
*  the handleInteraction() method is called on the game object,
*  with the physical keyboard letter pressed, used as an argument
*/ 

document.addEventListener( 'keyup', (e) => {
   for (let i = 0 ; i < buttons.length ; i++) {
      const buttonPressed = buttons[i] ;
   if (e.key === buttonPressed.textContent) {
      game.handleInteraction(buttonPressed) ;
   }}
});