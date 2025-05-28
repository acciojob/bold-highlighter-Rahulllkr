function highlight() {
    //Write your code here
	const strong = document.querySelectorAll("strong")

	strong.forEach(el => {
		el.style.color = 'rgb(0,128,0)';
	})


}


function return_normal() {
    //Write your code here
	const strong = document.querySelectorAll("strong")

	strong.forEach(el => {
		el.style.color = 'rgb(0,0,0)';
	})

    
}
