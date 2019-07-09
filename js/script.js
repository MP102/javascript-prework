var argComputerMove, argMoveId, argPlayerMove, computerMove, playerMove, randomNumber, argButtonName, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');


/**
 * Describe this function... The player chooses an argument (stone, paper or scissors) by pressing 1 or 2 or 3 on the keyboard, respectively. 
 * If another character is selected, the player will receive information that he has chosen "stone".
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}
/**
 * Describe this function... 
 * The function compares the computer and player selections. In the event of a player's victory, the function returns the "You win" message. (Lines 26 - 31).
Lines 32, 33 return "Draw".
"Else" returns the player's defeat.
Lines 39-42 are responsible for the description of the player's choice.
Lines 43-46 generate a computer selection
Line 47 calls the function with the results of the game (Lines 26-35).
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });


/**  Teraz czas na zastosowanie wiedzy o zmiennych w praktyce! Otwórz swój projekt z preworka JS 
 i znajdź w nim plik js/script.js. Twoim zadaniem jest poprawa deklaracji zmiennych var na poprawne zastosowanie 
 zmiennych let i stałych const, czyli:

 - nie deklarujemy argumentów funkcji,
 - jeśli to możliwe, używaj stałych,
 - deklaracje stałych/zmiennych powinny być jak najbliżej miejsca ich wykorzystania, czyli staramy się używać możliwie małych zakresów,
 - unikaj sytuacji, w których tuż pod deklaracją zmiennej nadajesz jej wartość – lepiej zrobić to od razu w deklaracji.
*/