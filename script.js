

const decrem=document.getElementById("decrem");
const reset=document.getElementById("reset");
const increm=document.getElementById("increm");

let count=0;

increm.onclick=function(){
count++;
    document.getElementById("label").textContent=count;
}

decrem.onclick=function(){
    count--;
        document.getElementById("label").textContent=count;
    }
    
    
    reset.onclick=function(){
        count=0;
            document.getElementById("label").textContent=count;
        }