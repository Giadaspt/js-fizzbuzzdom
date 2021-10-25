
const container = document.getElementById('contain');

for ( let i = 0; i < 100; i++) {
  const box = document.createElement('box');
  box.className = 'box';
  box.innerHTML = i + 1;
  container.append(box);
  console.log('ciao');
}