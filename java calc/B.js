let num1="";
let num2="";
let Operator=""; 
let result="";



function handleScreen(){

  const num1Input =document.getElementById('num-1');
  const OperatorEle =document.getElementById('Operator');
  const num2Input =document.getElementById('num-2');
  const resultEle =document.getElementById('result');
  
  
   num1Input.Value=num1;
   OperatorEle.innerText=Operator;
   num2Input.Value=num1;
   resultEle.innerText="2222222";
    }

function handleClickNumber(number){
    if(Operator===""){
        num1=num1+number;}
    else{
      num2=num2+number;

    }

  handleScreen();

 }
 


 function handleMathOperator(op){
    
  if(Operator !==""){ handleResult();}
  
  
  Operator= op;
    console.log(Operator);
    handleScreen();

}


 
function handleScreen(){
  console.log(num1 +" "+ Operator+""+num2);
 
  console.log("result=" + result);
  console.log("***************************");


}




 function handleResult(){
  if (( num1.length > 0 && isNaN(num1))|| 
  Operator===""||
  ( num2.length > 0 && isNaN(num2))) return;
  
 
  const n1 =num1;
  const n2 =num2;

  
if(Operator==="+"){ result= Number (num1)+Number (num2)}

else if(Operator ==="-"){ result= Number (num1)- Number (num2)}

else if(Operator==="*"){ result= Number (num1)* Number (num2)}

else{ result= Number (num1)/ Number (num2)}



result=result.toFixed(10);
result=Math.round(result*100)/100;

num1=result;
num2="";
console.log("result"+ result);
handleScreen();

 }

 function handleClearStepBack() {
  /*
    1- if result is not empty => clear result
    2- if result is empty => continue
    3- if num2 is not empty => delete last number from num2
    4- if num2 is empty => continue
    5- if operator is not empty => clear operator
    6- if operator empty => continue
    7- if num1 is not empty => delete last number from num1
    8- if num1 is empty => do nothing
  */

  if (result !== "") {
    result = "";
    handleConsoleLog();
    return;
  }

  if (num2 !== "") {
    num2 = num2.slice(0, num2.length - 1);
    handleConsoleLog();
    return;
  }

  if (operator !== "") {
    operator = "";
    handleConsoleLog();
    return;
  }

  if (num1 !== "") {
    num1 = num1.slice(0, num1.length - 1);
    handleConsoleLog();
    return;
  }
}
  
 function handleClickClearAll(){
  console.log("claered ************ ")
num1="";
Operator="";
num2="";
result="";
handleScreen();

  } 


