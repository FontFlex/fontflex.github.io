const showDiv1Button = document.getElementById('showDiv1');
const showDiv2Button = document.getElementById('showDiv2');

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

showDiv1Button.addEventListener('click', () => {
  div1.style.display = 'block';
  div2.style.display = 'none';
});

showDiv2Button.addEventListener('click', () => {
  div1.style.display = 'none';
  div2.style.display = 'block';
});
