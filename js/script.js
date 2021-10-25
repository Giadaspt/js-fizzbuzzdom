
const contain = document.getElementById('contain');


for ( let i = 1; i <= 100; i++) {
  const box = document.createElement('box');
  box.className = 'box';
  let text = i;
  contain.append(box);

  if ((i % 3 == 0) && (i % 5 == 0) ){
    box.classList.add('fizzbuzz');
    //box.innerText = 'fizzbuzz';
    text = 'fizzbuzz';
    console.log('fizzbuzz', i);
  } else if (i % 3 == 0){
    box.classList.add('fizz');
    //box.innerText = 'fizz';
    text = 'fizz';
    console.log('fizz',i);
  } else if (i % 5 == 0){
    box.classList.add('buzz');
    //box.innerText = 'buzz';
    text = 'buzz';
    console.log('buzz', i);
  }

  box.innerHTML = text;

}