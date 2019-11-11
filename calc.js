let globalVarA = 0;
let globalVarB = 0;
let selectNumber = 0;
let globalOp = 0;
let temp = 0;

let displaySection1 = document.getElementById("row1");
let displaySection2 = document.getElementById("row2");
let displaySection3 = document.getElementById("row3");
let displaySection4 = document.getElementById("row4");

function clickCapture(element,inputType){
    switch (inputType) {
        case 'N':
            if(selectNumber === 0){
                firstNumber(element);
            }
            else{
                secondNumber(element);
            }              
            break;
        case 'O':
            globalOp = element.textContent;
            selectNumber = 1;
            displaySection2.innerHTML = displaySection3.textContent;
            displaySection3.innerHTML = element.textContent + ' ';          
            break;
        case 'AC':
            globalVarA = 0;
            globalVarB = 0;
            globalOp = '';
            displaySection1.innerHTML = '';
            displaySection2.innerHTML = '';
            displaySection4.innerHTML = '';
            displaySection3.innerHTML = '0';
            selectNumber = 0 ;
            temp = 0;
            break;
        case 'dot':
            floatValue();
            break;
        case 'equals':
            equals();

            break;
    
        default:
            console.log("default case")
            break;
    }
}

function firstNumber(element){
    if (temp) {
        displaySection1.innerHTML = displaySection1.textContent + displaySection2.textContent + displaySection3.textContent;
        displaySection2.innerHTML = '';
        displaySection3.innerHTML = '';        
    }
    globalVarA = globalVarA*10 + parseInt(element.textContent);
    displaySection3.innerHTML = globalVarA;
}
function secondNumber(element){
    globalVarB = globalVarB*10 + parseInt(element.textContent);
    displaySection3.innerHTML = globalOp + ' ' + globalVarB;
    let localVarA = 0;
    switch (globalOp) {
        case '+':
            localVarA = globalVarA + globalVarB;
            
            break;
        case '-':
            localVarA = globalVarA - globalVarB;
            
            break;
        case '*':
            localVarA = globalVarA * globalVarB;
            
            break;
        case '÷':
            localVarA = globalVarA / globalVarB;
            
            break;    
        default:
                console.log("default case")
            break;
    }
    displaySection4.innerHTML = '= ' + localVarA;
}


function operation(){}
function equals(){
    if(selectNumber){
    displaySection1.innerHTML = displaySection2.textContent;
    displaySection2.innerHTML = displaySection3.textContent;
    displaySection3.innerHTML = displaySection4.textContent;
    displaySection4.innerHTML = '';
    globalVarA = 0;
    globalVarB = 0;
    selectNumber = 0;
    temp = 1;
    }
}
function floatValue(){
    

}