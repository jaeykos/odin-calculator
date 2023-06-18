
let n1;
let n2;
let operator;
let lowerDisplayStr = "0";

lowerDisplay.innerHTML = lowerDisplayStr;

document.addEventListener("keyup", e=>{
    tempKeyCode = returnKeyDown(e);
    if ((e.shiftKey && tempKeyCode == 187) || tempKeyCode== 107){ //+
        clickOperatorBtn("+");
    }else if ((e.shiftKey && tempKeyCode == 189) || tempKeyCode== 109){ //-
        clickOperatorBtn("-");
    }else if ((e.shiftKey && tempKeyCode == 56) || tempKeyCode== 106){ //*
        clickOperatorBtn("*");
    }else if ((tempKeyCode == 191) || tempKeyCode== 111){ // divide
        clickOperatorBtn("/");
    }else if(tempKeyCode == 27 ){ //esc
        clickClearButton();
    }else if(tempKeyCode == 8){ //backspace
        clickUndoButton();
    }else if (tempKeyCode ==13){ //enter
        clickEqualBtn();
    }else if (tempKeyCode>= 48 && tempKeyCode <=57){//number
        clickNumBtn(String.fromCharCode(tempKeyCode));
    }

});

function returnKeyDown(e){
    var keynum;
  
    if(window.event) { // IE                  
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                 
      keynum = e.which;
    }
  
    return keynum;
  }



document.addEventListener("click", e=>{
    if (e.target.id == "clearBtn"){clickClearButton(); return;}
    if (e.target.id == "undoBtn"){clickUndoButton(); return;}
    if (e.target.className == "numBtn"){clickNumBtn(e.target.innerHTML); return;}
    if (e.target.className == "operatorBtn"){clickOperatorBtn(e.target.innerHTML); return;}
    if (e.target.id == "equalBtn"){clickEqualBtn(); return;}
    if (e.target.id == "decimalBtn"){clickDecimalBtn(e); return;}
});

function clickClearButton(){

    lowerDisplayStr = "0";
    lowerDisplay.innerHTML = lowerDisplayStr;
    upperDisplay.innerHTML = "";
}
function clickUndoButton(){
    if(lowerDisplayStr.length > 1){
        lowerDisplayStr = lowerDisplayStr.slice(0,-1);
        lowerDisplay.innerHTML = lowerDisplayStr;
    }else{
        clickClearButton();
    }
}

function clickOperatorBtn(operatorStr){
    lastChr =  lowerDisplayStr.slice(-1);
    if (lowerDisplayStr == "0"||
        lowerDisplayStr.slice(-1) == "."||
        lowerDisplayStr.includes("+")||
        lowerDisplayStr.includes("-")||
        lowerDisplayStr.includes("*")||
        lowerDisplayStr.includes("/")){
        return;
    }else {
        lowerDisplayStr = lowerDisplayStr + operatorStr;
        lowerDisplay.innerHTML = lowerDisplayStr; 
    }
} 
function clickEqualBtn(){
    lastChr = lowerDisplayStr[lowerDisplayStr.length]
    if (lastChr == '+' || lastChr == '-' || lastChr == "*"||lastChr== "/"||lastChr==".") {return;}

    operatorIndex = findOperatorIndex(lowerDisplayStr);
    num1Str = lowerDisplayStr.substring(0,operatorIndex)
    num2Str = lowerDisplayStr.substring(operatorIndex+1,lowerDisplayStr.length)
    
    opratorStr = lowerDisplayStr[operatorIndex];
    n1 = parseFloat(num1Str);
    n2 = parseFloat(num2Str);
    
    lowerDisplayStr = operate(opratorStr).toString();
    upperDisplay.innerHTML = lowerDisplay.innerHTML;
    lowerDisplay.innerHTML = lowerDisplayStr;

}
function clickDecimalBtn(){
    if(findOperatorIndex(lowerDisplayStr) == 0){ //if operator doesnt exist
        if (lowerDisplayStr.includes(".")){return;
        }else {lowerDisplayStr = lowerDisplayStr + ".";}
    }else{ //if operator exists
        strAfterOperator = lowerDisplayStr.substring(findOperatorIndex(lowerDisplayStr),lowerDisplayStr.length);// check if there is decimal after operator 
        if (strAfterOperator.includes(".")){return;}
        else{lowerDisplayStr = lowerDisplayStr + ".";}
    }

    lowerDisplay.innerHTML = lowerDisplayStr; 
}
function clickNumBtn(numStr){
    if(lowerDisplayStr =="0"){
        lowerDisplayStr = numStr;
    }else{
        lowerDisplayStr = lowerDisplayStr + numStr;
    }

    lowerDisplay.innerHTML = lowerDisplayStr;   
}

function isLowerDisplayLastCharDecimal(){
    if (lowerDisplay.innerHTML.slice(-1) == "."){
        return true;
    }
    return false;
}
function operate(operator){
    if (operator == "+"){
        return add();
    } else if (operator == '-'){
        return  subtract();
    }else if (operator == '*'){
        return  multiply();
    }else if (operator == '/'){
        return  divide();
    }
}
function findOperatorIndex(tempStr){
    operatorIndex = Math.max(tempStr.indexOf("+"), tempStr.indexOf("-"),tempStr.indexOf("*"),tempStr.indexOf("/"))
    if( operatorIndex > 0){
        return operatorIndex;
    }
    return 0;
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

