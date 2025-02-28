//your JS code here. If required.
const btn = document.getElementById('btn');
const closeBtn = document.getElementById('close-btn')
const display = document.querySelector('.modal-container');

btn.addEventListener('click', ()=>{
	display.style.display = "block"; 
})
closeBtn.addEventListener('click', ()=>{
	display.style.display = "none";
})
window.addEventListener('click', (e)=>{
	if(e.target == display){
		display.style.display = 'none';
	}
})