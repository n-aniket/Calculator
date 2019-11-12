let globalVarA = 0;
let globalVarB = 0;
let result = 0;
let selectNumber = 0;
let globalOp = 0;
let temp = 0;//used when '=' is pressed
let globalFloatSelector = 0;

let displaySection1 = document.getElementById("row1");
let displaySection2 = document.getElementById("row2");
let displaySection3 = document.getElementById("row3");
let displaySection4 = document.getElementById("row4");
let acButtonToC = document.getElementById("ac");

function clickCapture(element,inputType){
    acButtonToC.innerHTML = "C";
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
            globalFloatSelector = 0;
            displaySection2.innerHTML = displaySection3.textContent;
            displaySection3.innerHTML = element.textContent + ' ';          
            break;
        case 'cent':
            let localVarD;
            selectNumber++;
            if (globalVarB === 0 ) {
                localVarD = globalVarA/100;
                globalVarA = localVarD;
                displaySection4.innerHTML = '= ' + localVarD;                
            }

            break;
        case 'AC':
            globalVarA = 0;
            globalVarB = 0;
            globalOp = '';
            displaySection1.innerHTML = '';
            displaySection2.innerHTML = '';
            displaySection4.innerHTML = '';
            displaySection3.innerHTML = '0';
            acButtonToC.innerHTML = 'AC';
            selectNumber = 0 ;
            temp = 0;
            globalFloatSelector = 0;
            break;
        case 'dot':
            globalFloatSelector = 1;
            displaySection3.innerHTML = displaySection3.textContent + '.';
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
    let localVarB = 0;
    let localvarC = parseInt(element.textContent);
    if (temp) {
        displaySection1.innerHTML = displaySection1.textContent + displaySection2.textContent + displaySection3.textContent;
        displaySection2.innerHTML = '';
        displaySection3.innerHTML = '';   
        temp = 0;     
    }
    if (globalFloatSelector === 0) {
        globalVarA = globalVarA*10 + localvarC;
        displaySection3.innerHTML = globalVarA;
        displaySection4.innerHTML = '=' + globalVarA;
    }
    else{
        localVarB = Math.pow(10,globalFloatSelector);
        globalVarA = parseFloat((globalVarA + (localvarC/localVarB)).toFixed(globalFloatSelector));
        displaySection3.innerHTML = globalVarA;
        globalFloatSelector++;
    }
}
function secondNumber(element){
    let localVarB = 0;
    let localvarC = parseInt(element.textContent);
    if (globalFloatSelector === 0) {
        globalVarB = globalVarB*10 + parseInt(element.textContent);
        displaySection3.innerHTML = globalOp + ' ' + globalVarB;
    }
    else{
        localVarB = Math.pow(10,globalFloatSelector);
        globalVarB = parseFloat((globalVarB + (localvarC/localVarB)).toFixed(globalFloatSelector));
        displaySection3.innerHTML = globalOp + ' ' + globalVarB;
        globalFloatSelector++;

    }


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
            if (globalVarB === 0){
                displaySection4.innerHTML ="Can't divide by zero";
                return;                
            }
            localVarA = parseFloat((globalVarA /globalVarB).toFixed(5));
            break;  
        default:
                console.log("default case")
            break;
    }
    displaySection4.innerHTML = '= ' + localVarA;
}

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
    globalFloatSelector = 0;
    }

}