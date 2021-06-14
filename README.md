# Techdegree-Project-4
 My 4th Techdegree Project

This project is a guessing game which asks the user to find a phrase, selected at random from five pre-written phrases.
The phrase must be guessed letter by letter.
Letters can be selected either on the physical keyboard or on a screen keyboard.
After 5 incorrect guesses, the game is lost.
After the game is over, a new game can be started again.

The app.js file lets the user start the game with a button.
It adds further interactivity when a keyboard letter is clicked or pressed.
It also resets the game at the end of a game.

This project uses a Game class and a Phrase class, in the Game.js and Phrase.js files.
The Phrase class have methods which deal with the letters that make up the selected phrase.
These methods are then called in the Game object.
The Game class have various methods. They display the random selected phrase (out of five) in hidden letters on the screen.
Then they update the screen keyboard and five "lives" when the user clicks or presses on a letter
Finally the game ends when all letters have been found or five incorrect guesses have been made.

The instance of the Game object created for this project is called 'game'.
The instance of the Phrase object created with the selected phrase is called 'game.activePhrase'.

Some CSS changes have been made to the application :

Color : A handful of color changes were made, for the start background, the title Phrase Hunter, and the color of the letters,
when they are revealed in the phrase (show), when they are selected on the keyboard and correct (chosen) or incorrect (wrong) guesses.

Title : The Phrase Hunter h2 element text-transform property has been set from upper case to capitalize.

Letters : The phrase letters have been reduced with their heihg and width property set from 65 to 50 px, and the space property in between them has been widened a little from 15 to 25 px.
The border-radius property of the 'chosen' and 'wrong' screen keyboard letters have been set from 5 to 30 px so as to get round buttons.
The animation for their transformation is slower, with the transition property set from .2 to .8s
