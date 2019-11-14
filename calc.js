let globalVarA = 0;
let globalVarB = 0;
let result = 0;
let selectNumber = 0;
let globalOp = 0;
let temp = 0;
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
            if (selectNumber > 0) {
                globalVarA = result;  
                globalVarB = 0;
            }            
            globalOp = element.textContent;
            selectNumber ++;
            globalFloatSelector = 0;
            display(displaySection2.textContent,displaySection3.textContent, element.textContent + ' ',displaySection4.textContent);  
            break;
        case 'cent':
            centFunt();
            break;
        case 'clear':
            clearFunt();           
            break;
        case 'AC':
            globalVarA = 0;
            globalVarB = 0;
            globalOp = '';
            display('','','0','');
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
    if (temp) {//if = is pressed
        displaySection1.innerHTML = displaySection1.textContent + displaySection2.textContent + displaySection3.textContent;
        displaySection2.innerHTML = '';
        displaySection3.innerHTML = '';   
        temp = 0;     
    }
    if (globalFloatSelector === 0) {
        globalVarA = globalVarA*10 + localvarC;
    }else{
        localVarB = Math.pow(10,globalFloatSelector);
        globalVarA = parseFloat((globalVarA + (localvarC/localVarB)).toFixed(globalFloatSelector));
        globalFloatSelector++;
    }
    display(displaySection1.textContent,displaySection2.textContent,globalVarA,'=' + globalVarA);
}
function secondNumber(element){
    let localVarB = 0;
    let localvarC = parseInt(element.textContent);
    if (globalFloatSelector === 0) {
        globalVarB = globalVarB*10 + parseInt(element.textContent);
    }
    else{
        localVarB = Math.pow(10,globalFloatSelector);
        globalVarB = parseFloat((globalVarB + (localvarC/localVarB)).toFixed(globalFloatSelector));
        globalFloatSelector++;
    }    
    result = clacResult(); 
    display(displaySection1.textContent,displaySection2.textContent,globalOp + ' ' + globalVarB,'= ' + result)
}

function equals(){
    if(selectNumber){
    display(displaySection2.textContent,displaySection3.textContent,'= ' + result,'');
    globalVarB = 0;
    selectNumber = 0;
    temp = 1;
    globalFloatSelector = 0;
    }

}

function display(row1,row2,row3,row4){
    displaySection1.innerHTML = row1;
    displaySection2.innerHTML = row2;
    displaySection3.innerHTML = row3;
    displaySection4.innerHTML = row4;
}
function clearFunt(){
    if (selectNumber) {
                
        let str =  globalVarB.toString();
        globalVarB = str.substring(0, str.length - 1);
        globalVarB = parseFloat(globalVarB);
        if( isNaN(globalVarB)){
            globalVarB = 0;
        }
        
        display(displaySection1.textContent,displaySection2.textContent,globalOp +''+ globalVarB,'='+clacResult());
    } else {
        let str =  globalVarA.toString();
        globalVarA = str.substring(0, str.length - 1);
        globalVarA = parseFloat(globalVarA);
        
        if( isNaN(globalVarA)){
           console.log("ghfghsh");
            globalVarA = 0;
        }
        display(displaySection1.textContent,displaySection2.textContent,globalVarA,'='+globalVarA);
    }

}
function clacResult(){
    
    let localVarA = result;
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
    return localVarA;


}