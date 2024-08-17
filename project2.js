const from=document.querySelector("form")
//console.log(from)
from.addEventListener("submit",function(e){
     e.preventDefault();
    const height=document.querySelector("#height").value
    const weight=document.querySelector("#weight").value
    const result=document.querySelector("#result")
    const button=document.querySelector("#button")
     const bmi=(weight/((height*height)/10000)).toFixed(2)
     result.innerHTML=bmi;
     /* if(bmi<18.5){
        result.innerHTML="you are under weight ",bmi;
     console.log(bmi)
     }
     else if(bmi>18.5 || bmi<24.9){
        result.innerHTML="you are healthy ",bmi;
     
     }
     else if(bmi>25.0 || bmi<29.9){
        result.innerHTML="you are over  weight ",bmi;
     
     }
     else{


     } */
})