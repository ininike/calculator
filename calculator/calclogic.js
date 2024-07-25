var reset= false
const screens = document.getElementById('screen')
const input = document.querySelectorAll(".input");
const evaluate = document.getElementById("evaluate")
const AC = document.getElementById("AC")
const del = document.getElementById("delete")
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
        reset= true;
} 
evaluate.addEventListener("click",evals) 


input.forEach(btn => {

  function operate(){
    let val = btn.textContent

    if(val == "X"){
        screens.innerText += "*"
    }else
       screens.innerText += val
    reset= false;
  }
  btn.addEventListener("click", operate)
    
})


function clear(){
    screens.innerText= "";
}
AC.addEventListener("click",clear)

function negative(){
        screens.innerText=eval(screens.innerText+'*(-1)');
        reset=false;
}
neg.addEventListener("click",negative)

function delet(){
    let len= screens.innerText.length
    let sub= screens.innerText.substring(0, (len-1));
    screens.innerText= sub
}
del.addEventListener("click",delet);















 
        
  