/**
 * hsw
 * 공통으로 사용하는 js
 */

/*페이지 이동 
 *param : url 
 */
const fnMovePage = (url) => {
	location.href = url;
}

const fn_background = () => {
	
	const backgroundClassName = 'hero'; //백그라운드Div className바뀌면 바꿔주면 됨
	const newClassName = 'smHero';
	const background = document.getElementsByClassName(backgroundClassName)[0];	 
	
	background.className = newClassName;
}

const fn_number = (tag) => {
	tag.value = comma(tag.value.replace(/[^0-9]/g,''));
}

/*천단위 콤마*/
const comma = (x) => {
	x = replaceNull(x);
	let parts = x.toString().split(".");
	return parts[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") + (parts[1] ? "." + parts[1] : "");
}

const uncomma = (x) => {
	return x.replace(/[^\d]+/g, '');	
}

const replaceNull = (value) => {
	if(value == 'null' || value== null || value == undefined) {
		return "";
	} else {
		return value;
	}
}