/**
 * hsw
 * 작성화면에서 사용하는 js
 */

window.onload = () => {	
	
	fn_background();
	
	$("#date").pickadate({
		format: 'yyyy-mm-dd',
		container : '.writeDiv'
	});
	
	
}; 

fn_insertForm = () => {

	let form = document.getElementById('submitForm');
	let cost = document.getElementById('cost');
	cost.value = uncomma(cost.value);
	
	form.submit();
}


