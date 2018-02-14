/* Define some Global Variables
-----------------------------*/
var entries = []; //Collects each number string and arithmetic symbol for the final math
var temp = '' //Collects the button inputs until it becomes an official entry.


/* Our Functions!
---------------*/

//set what is displayed on the calculator screen
var display = function (val ) {
  var screen = document.getElementById('screen')
  screen.innerHTML = val;
}
//adds the number of the button pressed to our display and temp variable
var enterNumber = function (val) {
    temp += val
    display(temp)
}

//Clears out and resets the calculator
var allClear = function () {
  entries = []
  temp = ''
  display('0')
}

//clears latest number entry, but remembers everything entered before.
var clearEntry = function () {
    temp = ''
    display('0')
}

//When a math symbol is pressed, add the current temp to the entries and then the math symbol.
//Clear out temp so we can put in the next number.
var addSymbol = function (val) {
  entries.push(temp)
  entries.push(val)
  temp = ''
}

//When equals is pressed, send the last temp to entries and start the calculations
var pressEquals = function () {
  entries.push(temp)
  calculate()
}


//Grab all the entries and do math with them, then display the result and clear the caches.
var calculate = function () {
  var total = Number(entries[0])
  for (var i = 1; i < entries.length; i+= 2){
    total = doMath(entries[i], Number(entries[i+1]), total)
  }
  display(total)
  entries = []
  temp = ''
  }

//Parse the symbol entered and use that to do math with the current total and the given number.
var doMath = function (symbol, number, total) {
    if (symbol === '+'){total += number}
    else if (symbol === '-'){total -= number}
    else if (symbol === '*'){total *= number}
    else if (symbol === '/'){total /= number}
    return total
  }
