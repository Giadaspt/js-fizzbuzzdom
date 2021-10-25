
const contain = document.getElementById('contain');


for ( let i = 1; i <= 100; i++) {
  const box = document.createElement('box');
  box.className = 'box';
  box.innerHTML = i ;
  contain.append(box);

  if (i % 3 == 0){
    box.classList.add('fizz');
    let fizz = document.querySelector('.fizz');
    fizz.innerHTML = 'fizz';
    console.log('fizz',i);
  }
  if (i % 5 == 0){
    box.classList.add('buzz');
    let buzz = document.querySelector('.buzz');
    buzz.innerHTML = 'buzz';
    console.log('buzz', i);
  }
  if ((i % 3 == 0) && (i % 5 == 0) ){
    box.classList.add('fizzbuzz');
    let fizzbuzz = document.querySelector('.fizzbuzz');
    fizzbuzz.innerHTML = 'fizzbuzz';
    console.log('fizzbuzz', i);
  }





}
