/**
 * hsw
 * 인트로화면에서 사용하는 js
 */


/*param : indicator 'this'*/
const fnMoveBanner = (data) => {
	let indicator = document.querySelectorAll('.indicator span');
	let banner = document.querySelectorAll('#slide .cnt li');
	
	for(let i=0; i<indicator.length; i++) {
		if(data == indicator[i]) {
			indicator[i].classList.add('active');
			banner[i].style.display = "block";
		} else {
			indicator[i].classList.remove('active');
			banner[i].style.display = "none";		
		}
	}
}