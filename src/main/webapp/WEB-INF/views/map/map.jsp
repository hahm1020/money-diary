<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page session="false" %>

<html>
<head>
	<title>Hahm</title>
	<meta charset="utf-8">
</head>

<link rel="shortcut icon" href="/resources/img/com/planetX-logo.png">
<link rel="stylesheet" href="/resources/css/map.css">

<script type="text/javascript" src="/resources/js/common.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c467260d5b80298d707a1219a6be9ebd&libraries=services,clusterer,drawing"></script> <!-- 노트북 appkey -->

<script>
const global = JSON.parse('${expenseVO}');
window.onload = () =>{
	
// 	fn_drawMaker();
	
	// 맵 위치를 중심점.
	map.setBounds(bounds);
	
}
</script>
<body>
<div id="map-wrap"  style="width:100%; height:100%;display:flex;">
	<div class="navBar" style="width: 4.5rem;">
		<a href="javascript:fnMovePage('/');" title="인트로 페이지로 이동">
			<img alt="" src="/resources/img/com/planetX-logo.png" class="logo" style="width:100%;">	
		</a>
		
<!-- 		<ul class="nav nav-pills nav-flush flex-column mb-auto text-center"> -->
<!-- 			<li class="li-item">a</li> -->
<!-- 			<li class="li-item">b</li> -->
<!-- 			<li class="li-item">c</li> -->
<!-- 			<li class="li-item">d</li> -->
<!-- 		</ul> -->
		    
	</div>
	
	<div id="map" style="width:100%; height:100%;">
	</div>
	
</div>
</body>

<script type="text/javascript" src="/resources/js/map.js"></script>
</html>
