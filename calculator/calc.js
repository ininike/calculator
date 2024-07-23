var init= false
const screens = document.getElementById('screen')
const operator = document.querySelectorAll(".operator");
const number= document.querySelectorAll(".number")
const evaluate= document.getElementById("evaluate")
const AC=document.getElementById("AC")
const del= document.getElementById("delete")
function evals()
{
    let ans
     try {
         ans= eval(screens.innerText);
         screens.innerText= ans;
    } catch (error){
        screens.innerText="error";
        setTimeout(() => {
            screens.innerText=""
        },1000);
    }
        init= true;
} 
evaluate.addEventListener("click",evals) 


operator.forEach(btn => {

  function operate(){
    let val = btn.textContent

    if(val == "X"){
        screens.innerText += "*"
    }else
       screens.innerText += val
    init= false;
  }
  btn.addEventListener("click", operate)
    
})

number.forEach(btn => {
   
   function numbers (){
     let val = btn.textContent
     if(init==false){
        screens.innerText += val;
     }else{
        screens.innerText="";
        screens.innerText += val;
        init= false;
     }
   } 
 
   btn.addEventListener("click", numbers)
 })


function clear(){
    screens.innerText= "";
}
AC.addEventListener("click",clear)

function negative(){
        screens.innerText=eval(screens.innerText+'*(-1)');
        init=false;
}
neg.addEventListener("click",negative)

function delet(){
    let len= screens.innerText.length
    let sub= screens.innerText.substring(0, (len-1));
    screens.innerText= sub
}
del.addEventListener("click",delet);













 
        
  