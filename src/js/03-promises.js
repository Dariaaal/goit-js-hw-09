const submitBtn = document.querySelector('button');
const delayInput = document.getElementsByName('delay');
const stepInput = document.getElementsByName('step');
const amountInput = document.getElementsByName('amount');

submitBtn.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position++} in ${delay}ms`);
  }
}, delay);
}

createPromise(position, delay).then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});

setInterval((createPromise(position, delay)) => {
  Number(position)++}, stepInput.value)





