const $buttonContainer = document.getElementById("button-container")
const $equals = document.getElementById('equals')
const $formula = document.getElementById('formula')
const $answer = document.getElementById('answer')

//function
function insertValue(event){
    $formula.textContent += event.target.textContent
}
function equals(){

//variablrd
let leftOperand = ''
let rightOperand = ''
let operation = ''
let operationSet = false

for (let character of $formula.textContent){
    if(operationSet === false){
        if(character ==='+'|| character ==="-"|| character ==='*'|| character ==='/') {
        console.log('firs if')
        operation = character
        operationSet = true
        continue 
        }
    }

    if  (operationSet === false){
        leftOperand += character
    }

    if (operationSet === true){
         rightOperand += character
    }

}


console.log(`leftOperand is: ${leftOperand}`)
console.log(`operation is: ${operation}`)
console.log(`rightOperand is: ${rightOperand}`)

let answer = 0

if(operation === '+'){
    answer = parseInt(leftOperand) + parseInt(rightOperand)
}
else if (operation ==='-'){
        answer = parseInt(leftOperand) - parseInt(rightOperand)
}
else if (operation ==='*'){
        answer = parseInt(leftOperand) * parseInt(rightOperand)
}
else if (operation ==='/'){
        answer = parseInt(leftOperand) / parseInt(rightOperand)
}

$answer.textContent = answer
}
//event listener
$buttonContainer.addEventListener('click',insertValue)
$equals.addEventListener('click', equals)

