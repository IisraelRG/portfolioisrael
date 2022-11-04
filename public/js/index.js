const menu = document.getElementById('menu');
const list = document.getElementById('list');

menu.addEventListener('click', e =>{
	list.classList.toggle('active');
})