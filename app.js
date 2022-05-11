function add(number1, number2, printResult, resultPhrase) {
    var result = number1 + number2;
    if (printResult)
        console.log(resultPhrase + result);
    return result;
}
var number1 = 5; //type = 5 (inference)
var number2 = 2.8; //type = number (inference)
var number3; //type = number (assignment)
number3 = 1;
var printResult = true;
var resultPhrase = 'Result is: ';
// resultPhrase = 1 //error => infered type is string, not number
add(number1, number2, printResult, resultPhrase);
