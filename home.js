var question = parseInt(prompt("What Operation do you want to perform ? \n 1 - Addition \n 2- Substraction") || "0");
if (question == 1) {
    var numberOne = parseInt(prompt("Enter Number One") || "0");
    var numberTwo = parseInt(prompt("Enter Number Two") || "0");
    Addition(numberOne, numberTwo);
}
else if (question == 2) {
    var numberOne = parseInt(prompt("Enter Number One") || "0");
    var numberTwo = parseInt(prompt("Enter Number Two") || "0");
    Substraction(numberOne, numberTwo);
}
else {
    alert("not avaialbe");
}
function Addition(UserNumberOne, UserNumberTwo) {
    var result = UserNumberOne + UserNumberTwo;
    document.write("The sum of ".concat(UserNumberOne, " and ").concat(UserNumberTwo, " is equal to ").concat(result));
}
function Substraction(UserNumberOne, UserNumberTwo) {
    var result = UserNumberOne - UserNumberTwo;
    document.write("The sub of ".concat(UserNumberOne, " and ").concat(UserNumberTwo, " is equal to ").concat(result));
}
