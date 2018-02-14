# Javascript Calculator from Codepen

//Define two global values, the entries for calculation, and the running total of that calculation.  The entries will be an array (cos we'll have multiple, the amounts and the style of arithmetic.
var entries = [];
//The total will start at 0 and increase with arithmetic.
var total = 0;

//Define another global value called temp, which starts as an empty string.  
var temp = ''
//Listen to the button being clicked, and the value attached to it.  Turn that value into a variable called "val".  What val does is based on all the if/else statements below.
$("button").on('click', function() {
 	var val = $(this).text();

  // Got a number, add to temp
// If value isn't "not a number" (in other words is a number) OR if the value is a .
  if (!isNaN(val) || val === '.') {
//then add the value to our temporary variable.
    temp += val;
//Add to the area called "answer"(the screen of the calculator) the current temp string.  In this way, as you press numbers, they appear in order in that screen. .val is a jquery element that says (add whatever is in this placed value in parentheses).  In this case it's the variable string 'temp', with an additional function of substring added to it.  Substring adds the string between the indices listed.  So the first character up to the 10th character.  This is so the screen can stay at a regular size of 10 characters wide.
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
//If the value is the button 'AC' (clear everything) then reset all variables and show the answer section as an empty string.j
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  // Clear last entry
//If the button pressed is 'CE' (or clear last entry) reset the temp variable and display an empty string for the calculator screen.
  } else if (val === 'CE') {
    temp = '';
    $("#answer").val('')
    
  // Change multiply symbol to work with eval
  // if the value pressed is an X, send the current number string plus the multiply symbol to our
    // entries array.  So pressing 3 and then x will make entries look as so ['3','*']
  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    //after this, clear out the temp field for the next input.
    temp = '';
    
  // Change divide symbol to work with eval
  // Exactly the same as multiplication, but now with division!
  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

  // Got the equals sign, perform calculation
  // If they pressed the equal sign, then just add the last number entry to the array and start up
    // the calculations below.
  } else if (val === '=') {
  	entries.push(temp);

    //Turn the first entry (which will always be a number string) into an actual number.  We are
    //making a variable called nt, which will be adjusted based on every other indice in the entries
    //array.  
    var nt = Number(entries[0]);
    //We know that the entries will be structured like so
    //['number','arithmetic','number',arithmetic','number] 
    //because of how we set up the if/else and how people use a calculator.
    //So we can iterate over the array, with a safe assumption of what each indice will mean.
    for (var i = 1; i < entries.length; i++) {
      //start at index 1 (as we already added 0 above).
      //We know that indice 1 will be an arithmetic symbol, and so let's make a variable called
      //"next number" which is 1+1,, which we know will be a number.
      var nextNum = Number(entries[i+1])
      //we know indice 1 will be an arithmetic, let's make that explicit with a variable.
      var symbol = entries[i];
     //if that symbol is plus, than add the next num variable  
      if (symbol === '+') { nt += nextNum; } 
      //if it's a minus, then subtract the next num variable.
      else if (symbol === '-') { nt -= nextNum; } 
      //etc.
      else if (symbol === '*') { nt *= nextNum; } 
      //etc.
      else if (symbol === '/') { nt /= nextNum; }
     //iterate i once, before the loop iterates it again. This essentially means it's skipping two
      //spaces so that the next i will _also_ be an arithmetic symbol. 
      i++;
    }
    
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
//      if you end up with a negative number, display it as such.
      nt = Math.abs(nt) + '-';
    }
    // Replace the answer section with the value of the nt variable (which at this point willb e the
    // calculation)
    $("#answer").val(nt);
    //clear out entries and temp so we can start again!
		entries = [];
    temp = '';
    
  // Push number
    // if it's not an equal sign, then push the current number value plus the latest arithmetic
    // symbol to our entries array and clear out that temp variable again.
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});
