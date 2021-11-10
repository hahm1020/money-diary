/**
 * hsw
 */

let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

let options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng("37.4796166877449", "126.97365286818"), //지도의 중심좌표.
	level: 5 //지도의 레벨(확대, 축소 정도 1~ 14)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

let geocoder = new kakao.maps.services.Geocoder();

// 마커 이미지의 이미지 주소입니다.
let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
// 마커 이미지의 이미지 크기 입니다
let imageSize = new kakao.maps.Size(24, 35); 
// 마커 이미지를 생성합니다    
let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
let bounds = new kakao.maps.LatLngBounds();   

let callbackNum = 0;
let callback = function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
		global[callbackNum].x = result[0].x;
		global[callbackNum].y = result[0].y;
    } else {
		global[callbackNum].x = undefined; 
		global[callbackNum].y = undefined; 
	}
		callbackNum++ ;
};

// 리스트 주소 지오코딩
for(var i=0; i<global.length; i++) {
	geocoder.addressSearch(global[i].lc, callback);
}

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
closeOverlay = () => {
    customOverlay.setMap(null);     
}

fn_drawMaker = () => {
	for(let i=0; i<global.length; i++) {
		if( (global[i].y != undefined) && (global[i].x != undefined)){
			let content = '';
				content = 
			'<div class="overlaybox">' +
			'	<div class="close"></div>'+
		    '    <ul>' +
		    '        <li class="up">' +
		    '            <span class="number">품목</span>' +
		    '            <span class="title">'+ global[i].item + '</span>' +
		    '        </li>' +
		    '        <li>' +
		    '            <span class="number">비용</span>' +
		    '            <span class="title">'+ comma(global[0].cost) + '(원)</span>' +
		    '        </li>' +
		    '        <li>' +
		    '            <span class="number">날짜</span>' +
		    '            <span class="title">'+ global[i].date + '</span>' +
		    '        </li>' +
		    '        <li>' +
		    '            <span class="number">위치</span>' +
		    '            <span class="title">'+ global[i].lc + '</span>' +
		    '        </li>' +
		    '        <li>' +
		    '            <span class="number">작성자</span>' +
		    '            <span class="title">'+ global[i].id + '</span>' +
		    '        </li>' +
		    '    </ul>';
		    '</div>';
			
			let marker = new kakao.maps.Marker({
		        map: map, // 마커를 표시할 지도
		        position: new kakao.maps.LatLng(global[i].y,global[i].x), // 마커를 표시할 위치				
		        image : markerImage // 마커 이미지 
			});
				
			// 클릭 가능 여부를 지정한다.
			// true 로 지정하게 되면 마커를 클릭 했을 때, 지도의 클릭 이벤트가 발생하지 않도록 막아준다.
			marker.setClickable(true);
			marker.setTitle(global[i].item);
			bounds.extend(marker.getPosition());
			
			
			// 커스텀 오버레이를 생성합니다
			var customOverlay = new kakao.maps.CustomOverlay({
			    position: marker.getPosition(),      
				map : map,
			    content: content,
			    xAnchor: 0.3,
			    yAnchor: 0.91
			});
			
		    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
		    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
			let closeBtn = customOverlay.a.querySelector('.close');	//	이벤트를 추가할 태그
			closeBtn.addEventListener('click', makeClose(customOverlay));
			
			// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
			kakao.maps.event.addListener(marker, 'click', makeClick(map, customOverlay));
			
			// 커스텀 오버레이
			customOverlay.setMap(null);    
		}
		
	}
	callbackNum = 0;
	// 맵 위치를 중심점.
	map.setBounds(bounds);
}

// 커스텀오버레이 여는 클로저를 만드는 함수입니다 
makeClick = (map, customOverlay) => {
    return () => {
	    customOverlay.setMap(map);
		map.panTo(customOverlay.getPosition());	// 맵 중심 맠커로이동
    };
}

// 커스텀오버레이 닫는 클로저를 만드는 함수입니다 
makeClose = (customOverlay) => {
    return () => {
	    customOverlay.setMap(null);
    };
}

