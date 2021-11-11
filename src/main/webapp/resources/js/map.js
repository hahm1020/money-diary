/**
 * hsw
 */

const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng("37.4796166877449", "126.97365286818"), //지도의 중심좌표.
	level: 5 //지도의 레벨(확대, 축소 정도 1~ 14) 작을수록 대축척
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
const geocoder = new kakao.maps.services.Geocoder();

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();
// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 마커 이미지의 이미지 주소입니다.
const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
// 마커 이미지의 이미지 크기 입니다
const imageSize = new kakao.maps.Size(24, 35); 
// 마커 이미지를 생성합니다    
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
const bounds = new kakao.maps.LatLngBounds();   

//let callbackNum = 0;
//const callback = function(result, status) {
//    if (status === kakao.maps.services.Status.OK) {
//		global[callbackNum].x = result[0].x;
//		global[callbackNum].y = result[0].y;
//    } else {
//		global[callbackNum].x = undefined; 
//		global[callbackNum].y = undefined; 
//	}
//		callbackNum++ ;
//};

// 리스트 주소 지오코딩
//for(let i=0; i<global.length; i++) {
//	if( global[i].lc != null && global[i].lc != undefined )	{
//		geocoder.addressSearch(global[i].lc, callback);
//	}
//}

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
const closeOverlay = () => {
    customOverlay.setMap(null);     
}

// 마커 클러스터러를 생성합니다
// 마커 클러스터러를 생성할 때 disableClickZoom 값을 true로 지정하지 않은 경우
// 클러스터 마커를 클릭했을 때 클러스터 객체가 포함하는 마커들이 모두 잘 보이도록 지도의 레벨과 영역을 변경합니다
// 이 예제에서는 disableClickZoom 값을 true로 설정하여 기본 클릭 동작을 막고
// 클러스터 마커를 클릭했을 때 클릭된 클러스터 마커의 위치를 기준으로 지도를 1레벨씩 확대합니다
const clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 6, // 클러스터 할 최소 지도 레벨
    disableClickZoom: true // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
});

// 마커 클러스터러에 클릭이벤트를 등록합니다
// 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
// 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {

    // 현재 지도 레벨에서 1레벨 확대한 레벨
    const level = map.getLevel()-1;

    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map.setLevel(level, {anchor: cluster.getCenter()});
});

// 커스텀오버레이 여는 클로저를 만드는 함수입니다 
const makeClick = (map, customOverlay) => {
    return () => {
	    customOverlay.setMap(map);
		map.panTo(customOverlay.getPosition());	// 맵 중심 맠커로이동
    };
}

// 커스텀오버레이 닫는 클로저를 만드는 함수입니다 
const makeClose = (customOverlay) => {
    return () => {
	    customOverlay.setMap(null);
    };
}

/*
 *마커 및 커스텀 그리는 부분
 *제일 마지막에 작성하면됨
 */ 
//fn_drawMaker = () => {
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
	    '            <span class="title">'+ comma(global[i].cost) + '(원)</span>' +
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

		const marker = new kakao.maps.Marker({
	        map: map, // 마커를 표시할 지도
	        position: new kakao.maps.LatLng(global[i].y,global[i].x), // 마커를 표시할 위치				
	        image : markerImage // 마커 이미지 
		});
			
		// 클릭 가능 여부를 지정한다.
		// true 로 지정하게 되면 마커를 클릭 했을 때, 지도의 클릭 이벤트가 발생하지 않도록 막아준다.
		marker.setClickable(true);
		marker.setTitle(global[i].item);
		bounds.extend(marker.getPosition());
		
		// 클러스터러에 마커들을 추가합니다
    	clusterer.addMarker(marker);
		
		// 커스텀 오버레이를 생성합니다
		const customOverlay = new kakao.maps.CustomOverlay({
		    position: marker.getPosition(),      
			map : map,
		    content: content,
		    xAnchor: 0.3,
		    yAnchor: 0.91
		});
		
	    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
	    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
		const closeBtn = customOverlay.a.querySelector('.close');	//	이벤트를 추가할 태그
		closeBtn.addEventListener('click', makeClose(customOverlay));
		
		// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
		kakao.maps.event.addListener(marker, 'click', makeClick(map, customOverlay));
		
		// 커스텀 오버레이
		customOverlay.setMap(null);    
	}
	
}
//callbackNum = 0;	
//}

