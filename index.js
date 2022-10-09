const increase = document.getElementById('increase-btn');
const reset = document.getElementById('reset-btn');
const decrease = document.getElementById('decrease-btn');
const counter = document.getElementById('counter');


let count = 0;

increase.addEventListener('click',()=>{
  count = count + 1 ;
  counter.innerHTML = count;
})
reset.addEventListener('click',()=>{
    count = 0
    counter.innerHTML = count;
})
decrease.addEventListener('click',()=>{
    count -=1 ;
  counter.innerHTML = count;
})
