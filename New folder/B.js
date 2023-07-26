let num1="";
let num2="";
let Operator=""; 
let result="";



function handleClickNumber(number){
    if(Operator===""){
        num1=num1+number;}
    else{
      num2=num2+number;

    }

  showConsole();

 }
 


 function handleMathOperator(op){
    
  if(Operator !==""){ handleResult();}
  
  
  Operator= op;
    console.log(Operator);
    showConsole();

}


 
function showConsole(){
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
showConsole();

 }


 function handleClickClearStepBake(){
  if(result!== " "){result="" 
showConsole();

return;
  
  } 
  if(num2 !==''){
  
    num2 =num2.slice(0,num2.length-1);
    showConsole();
  
  
    return;
  
  }
  
  if(Operator!==""){ Operator="";
  
  showConsole();
  
  
  return;}
  
  if(num1!==""){num1=num1.slice(0,num1.length-1); 
    showConsole();

  
    return;}

    showConsole();
  
    }
  
  
 function handleClickClearAll(){
  console.log("claered ************ ")
num1="";
Operator="";
num2="";
result="";
showConsole();

  } 
