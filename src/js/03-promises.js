import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const submitBtn = document.querySelector('button');
const delay = document.getElementsByName('delay');
const step = document.getElementsByName('step');
const amount = document.getElementsByName('amount');

submitBtn.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
  });
  return promise;
}

function onSubmit(e) {
  e.preventDefault();
  let delayInput = +delay.value;
  let stepInput = +step.value;
  let amountInput = +amount.value;

  for (let position = 1; position <= amountInput; position += 1) {
    createPromise(position, delayInput)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
    delayInput += stepInput;
  }
}





