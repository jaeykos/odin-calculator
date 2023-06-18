
let n1;
let n2;
let operator;
let lowerDisplayStr = "0";

lowerDisplay.innerHTML = lowerDisplayStr;

document.addEventListener("click", e=>{
    if (e.target.id == "clearBtn"){clickClearButton(e); return;}
    if (e.target.id == "undoBtn"){clickUndoButton(e); return;}
    if (e.target.className == "numBtn"){clickNumBtn(e); return;}
    if (e.target.className == "operatorBtn"){clickOperatorBtn(e); return;}
    if (e.target.id == "equalBtn"){clickEqualBtn(e); return;}
    if (e.target.id == "decimalBtn"){clickDecimalBtn(e); return;}
});

function clickClearButton(){

    lowerDisplayStr = "0";
    lowerDisplay.innerHTML = lowerDisplayStr;
}
function clickUndoButton(){
    if(lowerDisplayStr.length > 1){
        lowerDisplayStr = lowerDisplayStr.slice(0,-1);
        lowerDisplay.innerHTML = lowerDisplayStr;
    }else{
        clickClearButton();
    }
}

function clickOperatorBtn(e){
    lastChr =  lowerDisplayStr.slice(-1);
    if (lowerDisplayStr == "0"||
        lowerDisplayStr.slice(-1) == "."||
        lowerDisplayStr.includes("+")||
        lowerDisplayStr.includes("-")||
        lowerDisplayStr.includes("*")||
        lowerDisplayStr.includes("/")){
        return;
    }else {
        lowerDisplayStr = lowerDisplayStr + e.target.innerHTML;
        lowerDisplay.innerHTML = lowerDisplayStr; 
    }
} 
function clickEqualBtn(){}
function clickDecimalBtn(){
    if(lowerDisplayStr =="0"){
        lowerDisplayStr = e.target.innerHTML;
    }else{
        lowerDisplayStr = lowerDisplayStr + e.target.innerHTML;
    }

    lowerDisplay.innerHTML = lowerDisplayStr; 
}

function clickNumBtn(e){
    if(lowerDisplayStr =="0"){
        lowerDisplayStr = e.target.innerHTML;
    }else{
        lowerDisplayStr = lowerDisplayStr + e.target.innerHTML;
    }

    lowerDisplay.innerHTML = lowerDisplayStr;   
}



function isLowerDisplayLastCharDecimal(){
    if (lowerDisplay.innerHTML.slice(-1) == "."){
        return true;
    }
    return false;
}


function operate(n1, n2 ,operator){
    if (operator == "+"){
        add();
    } else if (operator == '-'){
        subtract();
    }else if (operator == '*'){
        multiply();
    }else if (operator == '/'){
        divide();
    }
}



function add(){
    return n1 + n2;
}

function subtract(){
    return n1 - n2;
}

function multiply(){
    return n1*n2;
}

function divide(){
    return n1/n2;
}

