const up = document.querySelector(".up");
const down = document.querySelector(".down");
const h1 = document.createElement("h1");
const div = document.querySelector(".display");
div.appendChild(h1);
//const h1 = document.querySelector("h1");

let count=0;
h1.innerText = 0;
up.addEventListener('click',function(){
    count++;
    h1.innerText = count;
})
//down.ariaDisabled = false;
down.addEventListener('click',function(){
    if(count===0){
        down.ariaDisabled = true;
    }
    else{
        count--;
        h1.innerText = count;
    }
    
})