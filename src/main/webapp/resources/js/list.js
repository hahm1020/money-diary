/**
 * hsw
 * 리스트화면에서 사용하는 js
 */

window.onload = function () {
	
	fn_background();
	
};


fn_deleteList = () => {
	let chk_list = document.querySelectorAll('[name="chk-item"]');
	let del_list = []; 
	
	chk_list.forEach(function(item) {
		item.checked ? del_list.push(item.nextElementSibling.value) : item.checked;
	});
	
	document.getElementById('delList').value = del_list;
	
	const listForm = document.getElementById("listForm");
	listForm.action = "/hsw/exp/delete.do"
	listForm.submit();
}

fn_pagingForm = (page) => {
	
	document.getElementById('nowPage').value = page;
	
	const listForm = document.getElementById("listForm");
	listForm.action = "/hsw/exp/listVw.do";
	listForm.submit();
}