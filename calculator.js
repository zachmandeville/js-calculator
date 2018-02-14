//Define some Global Variables

var entries = []; //Collects each number string and arithmetic symbol for the final math
var total = 0; //The final math.
var temp = '' //Collects the button inputs until it becomes an official entry.
var arithmetic = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/'
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

var testDisplay = function (val) {
  var screen = document.getElementById('screen') //our calculator screen
  if (val === 'cool') {
    entries.push(temp)
    calculate()
  }

  //if val is 'CE', or clear last entry, remove the temp file and leave things be.
  else if (val === 'CE'){
    temp = ''
    display('whatup')
  }
  else if (arithmetic[val] !== -1) {
    entries.push(temp)
    entries.push(arithmetic[val])
    temp = ''
  }
}

var display = function (val ) {
  var screen = document.getElementById('screen')
  screen.innerHTML = val;
}
  
var calculate = function () {
  var nt = Number(entries[0])
  for (var i = 1; i < entries.length; i++){
    var nextNum = Number(entries[i+1])
    var symbol = entries[i]
    if (symbol === '+'){nt += nextNum}
    else if (symbol === '-'){nt -= nextNum}
    else if (symbol === '*'){nt *= nextNum}
    else if (symbol === '/'){nt /= nextNum}
    i++
  }
  display(nt)
  entries = []
  temp = ''
}
