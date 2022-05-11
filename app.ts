function add(number1: number, number2: number, printResult: boolean, resultPhrase: string) {
  const result = number1 + number2
  if (printResult) console.log(resultPhrase + result)
  return result
}

const number1 = 5 //type = 5 (inference)
let number2 = 2.8 //type = number (inference)
let number3: number //type = number (assignment)
number3 = 1
const printResult = true
let resultPhrase = 'Result is: '
// resultPhrase = 1 //error => infered type is string, not number

add(number1, number2, printResult, resultPhrase)
