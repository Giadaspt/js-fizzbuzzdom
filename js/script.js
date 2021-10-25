
const contain = document.getElementById('contain');


for ( let i = 1; i <= 100; i++) {
  const box = document.createElement('box');
  box.className = 'box';
  box.innerHTML = i;
  contain.append(box);

  if (i % 3 == 0){
    box.classList.add('fizz');
    box.innerText = 'fizz';
    console.log('fizz',i);
  }
  if (i % 5 == 0){
    box.classList.add('buzz');
    box.innerText = 'buzz';
    console.log('buzz', i);
  }
  if ((i % 3 == 0) && (i % 5 == 0) ){
    box.classList.add('fizzbuzz');
    box.innerText = 'fizzbuzz';
    console.log('fizzbuzz', i);
  }

}