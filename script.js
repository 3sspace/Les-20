let number1 = prompt(
    "Enter number 1"
    );
let number2 = prompt(
    "Enter number 2"
    );
let a = number1, b = number2;
function maxNumber(a,b){
     if (a < b) {
     return b;
} else if (a > b) {
     return a;
} else {
   return 'a = b';
} 
}
alert(maxNumber(a,b));
