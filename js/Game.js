/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
* Creates Game class
* Properties :
* this.missed - the number of missed guesses which is set to 0 in the start
* this.phrases - an array of phrases objects which is created in the createPhrases() method
* this.activePhrase - the phrase to be guessed selected at random in the array, which is not selected in the start
*/

class Game {

    constructor() {
        this.missed = 0 ;
        this.phrases = this.createPhrases() ;
        this.activePhrase = null ;
    };

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases(){
        const array = [
            {phrase :'If you dont become the ocean you will be seasick every day'},
            {phrase :'Paths are made by walking'},
            {phrase :'The only truth is music'},
            {phrase :'Awe is what moves us forward'}
        ];
        return array; 
    };

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/

    getRandomPhrase(){
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)] ;
        return randomPhrase ;
    };


/**
* Begins game by selecting a random phrase and displaying it to user
* the active phrase is selected at random in the array
* the property this.activePhrase is set to a new instance of the Phrase class, using the random phrase as argument
* the addPhraseToDisplay method is called on this new instance of the Phrase class with the random phrase argument
*/

    startGame(){
        const overlay = document.getElementById('overlay') ;
        overlay.style.visibility = "hidden" ;

        this.activePhrase = new Phrase(this.getRandomPhrase().phrase) ;
        this.activePhrase.addPhraseToDisplay() ;
    };


/**
* Handles the onscreen keyboard buttons clicked and the physical keyboard buttons pressed
* @param (HTMLButtonElement) button - The clicked/pressed button element
*
* Once a button has been used, it is disabled and cannot be used again
*
* If the selected button matches a letter in the phrase :
* the button's CSS class is set to 'chosen'
* the showMatchedLetter() method is called
* the checkForWin() method is called, and if the game is won the gameOver(true) method is called to end the game
*
* If the selected button does not match a letter in the phrase :
* the button's CSS class is set to 'wrong'
* the removeLife() method is called
*/

    handleInteraction(button) {
    button.disabled = true ;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.className = 'chosen' ;
            this.activePhrase.showMatchedLetter(button.textContent) ;
            if (this.checkForWin()) {this.gameOver(true)} ;
        }
        else{
            button.className = 'wrong' ;
            this.removeLife();
        }
    };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard by changing the png file
* If five incorrect guesses have been made, the game is lost and the gameOver() method is called to end the game
*/

    removeLife() {

        this.missed += 1 ;

        let scoreHearts = document.querySelector('img[src="images/liveHeart.png"]') ;
        scoreHearts.src = "images/lostHeart.png" ;

        if (this.missed === 5) {
        this.gameOver();
        }

    };


/**
* Checks if the game has been won : if all letters have been guessed
* @return {boolean} True if game has been won, false if game wasn't won
*/

    checkForWin() {
        const hiddenLetter = document.querySelectorAll('.letter') ;
        if (hiddenLetter.length === 0) {
        return true ;
        }
        else {
        return false ;
        }
    };
   

/**
* If the game is won :
* a winning message is displayed
* a winning overlay (className : 'win') is displayed
*
* If the game is lost :
* a losing message is displayed
* a losing overlay (className : 'lose') is displayed
*
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver(gameWon) {

        overlay.style.visibility = "visible" ;
        
        const gameOverMessage = document.getElementById('game-over-message') ;

        if (gameWon) {
            gameOverMessage.textContent = 'Great job !' ;
            overlay.className = 'win' ;
        }
        else {
            gameOverMessage.textContent = 'Sorry, better luck next time !' ;
            overlay.className = 'lose' ;
        } 

    };

};