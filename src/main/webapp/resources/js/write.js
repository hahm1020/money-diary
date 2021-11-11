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
const geocoder = new kakao.maps.services.Geocoder();

const fn_insertForm = () => {

	const cost = document.getElementById('cost');
	cost.value = uncomma(cost.value);
	
	const lc = document.getElementById('lc').value;
	
	geocoder.addressSearch(lc, callback);
}

const callback = function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
		
		document.getElementById('x').value = result[0].x;
		document.getElementById('y').value = result[0].y;
		
		const form = document.getElementById('submitForm');
		confirm('저장하시겠습니까?') == true ? form.submit() : false;
    } else {
		alert('장소는 필수값 입니다.');
	}
};



