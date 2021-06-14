/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
* Creates Phrase class
* Properties :
* this.phrase - the phrase to be guessed which is set to lower case
*/

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase() ;
   }

/**
* Display phrase on game board
* Creates li elements appended in the phrase ul element
* Depending on whether the character is a space or a letter, give the li elements :
* a CC class of 'hide space' or 'hide letter ...' 
* a white space or the letter content
*/

    addPhraseToDisplay(){

       const phraseDiv = document.getElementById('phrase') ;
       const phraseUl = phraseDiv.firstElementChild ;

       const phraseChar = this.phrase.split('')  ;

       for (let i = 0 ; i < phraseChar.length ; i++) {
       const phraseLi = document.createElement('li') ;
       phraseUl.appendChild(phraseLi) ;

       if(phraseChar[i] === ' ') {
        phraseLi.className = "hide space" ;
        phraseLi.textContent = ' ' ;
       }
       
       else {
        phraseLi.className = `hide letter ${phraseChar[i]}` ;
        phraseLi.textContent = `${phraseChar[i]}` ;
       }
     }
   };
   

/**
* Checks if passed letter is in the phrase
* @param (string) letter - Letter to check
*/

   checkLetter(letter) {

         if (this.phrase.includes(letter)) {
         return true ;
         }
         else {
         return false ;
         }
   };


/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/

   showMatchedLetter(letter) {

      const matchedLetter = document.getElementsByClassName(`hide letter ${letter}`) ;
      const numLoops = matchedLetter.length ;

      for (let i = 0 ; i < numLoops ; i++) {
         matchedLetter[0].className = 'show' ;
      }
   };

};