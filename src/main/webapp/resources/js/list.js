/**
 * hsw
 * 리스트화면에서 사용하는 js
 */

window.onload = function () {
	
	fn_background();
	
};

const listModule = (function() {
	console.log('listModule IIFE');
			
	let me = {
		
		init : function() {
			me.event();
		},
		
		el : {
			listForm	: document.getElementById("listForm"),
			deleteBtn	: document.getElementById("deleteBtn"),
			nowPage 	: document.getElementById('nowPage'),
			paging : document.querySelectorAll("#wrap_paging a"),
			chk_list : document.querySelectorAll('[name="chk-item"]'),
			del_list : document.getElementById('delList'),
		},
		
		//paging
		fn_pagingForm : (page) => {
			me.el.nowPage.value = page;
			me.el.listForm.action = "/hsw/exp/listVw.do";
			me.el.listForm.submit();
		},
		
		//delete
		fn_deleteList : () => {
			let del_list = []; 
			
			me.el.chk_list.forEach(function(item) {
				item.checked ? del_list.push(item.nextElementSibling.value) : item.checked;
			});
			
			me.el.del_list.value = del_list;
			
			me.el.listForm.action = "/hsw/exp/delete.do"
			me.el.listForm.submit();
		},
		
		//event
		event : () => {
//			me.el.paging.addEventListener('click',me.fn_pagingForm);
			$(me.el.paging).on("click",function() {
				me.fn_pagingForm(this.text);
			});
			me.el.deleteBtn.addEventListener('click',me.fn_deleteList);
		},
		
		
	}
	
	me.init();
	
	return me;
});