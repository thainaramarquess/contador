const value = document.getElementById('value')
const plusButton = document.getElementById('plus')
const minusBotton = document.getElementById('minus')
const resetBotton = document.getElementById('reset')

const updateValue = () =>{
  // para mudar no html
   value.innerHTML = count;
};


let count = 0;
let intervalId = 0;

// adicionar número
plusButton.addEventListener('mousedown', ()=> {
  intervalId = setInterval( ()=>{
    count += 1;
    updateValue();
  },100);
});
// diminuir o número
 minusBotton.addEventListener('mousedown', ()=> {
  intervalId = setInterval( ()=>{
    count -= 1;
    updateValue();
  },100);
});
// resetar a contagem
resetBotton.addEventListener('click', ()=> {
   count = 0;
   updateValue();
});

// parar a contagem
document.addEventListener('mouseup', ()=> clearInterval(intervalId));