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

const writeModule = (function() {
	console.log('writeModule IIFE');
		
	let me = {
		geocoder : new kakao.maps.services.Geocoder(),
		
		init : function() {
			me.event();
		},
		
		el : {
			saveBtn : document.getElementById("saveBtn"),
			cost 	: document.getElementById('cost'),
			lc 		: document.getElementById('lc'),
			x		: document.getElementById('x'),
			y		: document.getElementById('y'),
			form 	: document.getElementById('submitForm'),
			
		},
		
		//save
		fn_insertForm : function() {
			me.el.cost.value = uncomma(me.el.cost.value);
			
			me.geocoder.addressSearch(me.el.lc.value, me.callback);
		},
		
		//kakaoCallback function
		callback : function(result, status) {
		    if (status === kakao.maps.services.Status.OK) {
				
				me.el.x.value = result[0].x;
				me.el.y.value = result[0].y;
				
				confirm('저장하시겠습니까?') == true ? me.el.form.submit() : false;
		    } else {
				alert('장소는 필수값 입니다.');
			}
		},
		
		//event
		event : function () {
			me.el.saveBtn.addEventListener('click',me.fn_insertForm);
		},
		
	}
	
	me.init();
	
	return me;
});