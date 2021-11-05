<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<jsp:include page='header.jsp' flush="false"/>

<script type="text/javascript" src="/resources/js/write.js"></script>

	<form id="submitForm" action="/hsw/exp/write.do">		
	
		<div class="writeDiv">
		    <div id="" class="write-item">
		        <label for="item" class="">품목</label>
		        <div class="">
		            <input id="item" name="item" class="comInput" type="text" value="">
		        </div>
		    </div>
		
		    <div id="" class="write-item">
		        <label for="cost" class="">금액<small> (원)</small></label>
		        <div class="">
		            <input id="cost" name="cost" class="comInput" type="text" value="" onkeyup="fn_number(this);">
		        </div>
		    </div>
		    
		    <div id="" class="write-item">
		        <label for="lc" class="">장소</label>
		        <div class="">
		            <input id="lc" name ="lc" class="comInput" type="text" value="">
		        </div>
		    </div>
		    
		    <div id="" class="write-item">
		        <label for="date" class="">사용일</label>
		        <div class="">
		            <input id="date" name="date" class="comInput date" type="text" value="" readonly>
		        </div>
		    </div>
		
		    <button type="button" class="btn" onClick="fn_insertForm();">save&#8594;</button>
		    <button type="button" class="btn" onClick="fnMovePage('/hsw/exp/listVw.do');">list&#8594;</button>
		</div>
		
	</form>

<jsp:include page="bottom.jsp" flush="false"/>