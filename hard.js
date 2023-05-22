const redBtn = document.getElementById('red-button');
const whiteBtn = document.getElementById('white-button');
const background = document.getElementById('body');
const buttons = document.querySelectorAll('.btn');

for( let i=0; i<buttons.length; i++){
	let button = buttons[i]

	button.addEventListener("click", ()=>{

		let classess = background.classList
		classess.remove(classess.item(0))
		classess.add(button.id)

	})
}

// redBtn.addEventListener('click', () => {
// 	return background.classList.toggle('redBack');
// });

// whiteBtn.addEventListener('click', () => {
// 	return background.classList.toggle('whiteBack');
// });



