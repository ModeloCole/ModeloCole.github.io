const menu=document.querySelector('.menu');
const navegación=document.querySelector('.menu-nav');

menu.addEventListener('click',()=>{
	navegación.classList.toggle("spread")
})

window.addEventListener('click',e=>{
	if(navegación.classList.contains('spread') && e.target !=menu && e.target !=navegación)
	navegación.classList.toggle("spread")		
})

const lenk =document.querySelector('.inst');
const lenk2 =document.querySelector('.git');

lenk.addEventListener('click',()=>{
	window.open('https://www.instagram.com/el.codeccionista/','_blank');
})
lenk2.addEventListener('click',()=>{
	window.open('https://github.com/elCodeccionista','_blank');
})

