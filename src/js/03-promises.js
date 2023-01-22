import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}

